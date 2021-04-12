import { v4 as uuidv4 } from 'uuid';
import { ICreateTarifa } from '@modules/tarifas/domain/models/ICreateTarifa';
import { ITarifasRepository } from '@modules/tarifas/domain/Repositories/ITarifasRepository';
import Tarifa from '@modules/tarifas/infra/typeorm/entities/Tarifa';

export default class FakeTarifaRepository implements ITarifasRepository {
  private tarifas: Tarifa[] = [];

  public async create({
    origem,
    destino,
    custo,
  }: ICreateTarifa): Promise<Tarifa> {
    const tarifa = new Tarifa();

    tarifa.id = uuidv4();
    tarifa.origem = origem;
    tarifa.destino = destino;
    tarifa.custo = custo;

    this.tarifas.push(tarifa);

    return tarifa;
  }

  public async save(tarifa: Tarifa): Promise<Tarifa> {
    Object.assign(this.tarifas, tarifa);

    return tarifa;
  }

  public async findById(id: string): Promise<Tarifa | undefined> {
    const tarifa = this.tarifas.find(tarifa => tarifa.id === id);

    return tarifa;
  }

  public async findAll(): Promise<Tarifa[] | undefined> {
    return undefined;
  }

  public async remove(tarifa: Tarifa): Promise<void> {
    this.tarifas.filter(task => task !== tarifa);
  }

  public async findByDDD(
    origem: string,
    destino: string,
  ): Promise<Tarifa | undefined> {
    const custoTarifa = this.tarifas.find(
      tarifa => tarifa.origem === origem && tarifa.destino === destino,
    );

    return custoTarifa;
  }
}
