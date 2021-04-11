import { v4 as uuidv4 } from 'uuid';
import { ICreateTarifa } from '@modules/tarifas/domain/models/ICreateTarifa';
import { ITarifasRepository } from '@modules/tarifas/domain/Repositories/ITarifasRepository';
import Tarifa from '@modules/tarifas/infra/typeorm/entities/Tarifa';

export default class FakeTarifaRepository implements ITarifasRepository {
  private tarifas: Tarifa[] = [];

  constructor() {
    this.ormRepository = getRepository(Tarifa);
  }

  public async create({
    origem,
    destino,
    custo,
  }: ICreateTarifa): Promise<Tarifa> {}

  // public async save(tarifa: Tarifa): Promise<Tarifa> {

  // }

  // public async findByDDD(
  //   origem: string,
  //   destino: string,
  // ): Promise<Tarifa | undefined> {

  // }

  // public async findById(id: string): Promise<Tarifa | undefined> {

  // }

  // public async findAll(): Promise<Tarifa[]> {

  // }

  // public async remove(tarifa: Tarifa): Promise<void> {

  // }
}
