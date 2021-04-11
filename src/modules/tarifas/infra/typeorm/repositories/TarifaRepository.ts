import { ICreateTarifa } from '@modules/tarifas/domain/models/ICreateTarifa';
import { ITarifasRepository } from '@modules/tarifas/domain/Repositories/ITarifasRepository';
import { getRepository, Repository } from 'typeorm';
import Tarifa from '../entities/Tarifa';

export default class TarifaRepository implements ITarifasRepository {
  private ormRepository: Repository<Tarifa>;

  constructor() {
    this.ormRepository = getRepository(Tarifa);
  }

  public async create({
    origem,
    destino,
    custo,
  }: ICreateTarifa): Promise<Tarifa> {
    const tarifa = this.ormRepository.create({ origem, destino, custo });

    await this.ormRepository.save(tarifa);

    return tarifa;
  }

  public async save(tarifa: Tarifa): Promise<Tarifa> {
    await this.ormRepository.save(tarifa);

    return tarifa;
  }

  public async findByDDD(
    origem: string,
    destino: string,
  ): Promise<Tarifa | undefined> {
    const custoTarifa = this.ormRepository.findOne({ origem, destino });

    return custoTarifa;
  }

  public async findById(id: string): Promise<Tarifa | undefined> {
    const tarifa = await this.ormRepository.findOne(id);

    return tarifa;
  }

  public async findAll(): Promise<Tarifa[]> {
    const products = this.ormRepository.find();

    return products;
  }

  public async remove(tarifa: Tarifa): Promise<void> {
    await this.ormRepository.remove(tarifa);
  }
}
