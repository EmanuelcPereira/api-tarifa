import Tarifa from '@modules/tarifas/infra/typeorm/entities/Tarifa';
import { ICreateTarifa } from '../models/ICreateTarifa';
import { ITarifa } from '../models/ITarifa';

export interface ITarifasRepository {
  findAll(): Promise<ITarifa[]>;
  findByDDD(origem: string, destino: string): Promise<Tarifa | undefined>;
  findById(id: string): Promise<ITarifa | undefined>;
  create(data: ICreateTarifa): Promise<ITarifa>;
  save(tarifa: ITarifa): Promise<ITarifa>;
  remove(tarifa: ITarifa): Promise<void>;
}
