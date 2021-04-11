import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';
import Tarifa from '../typeorm/entities/Tarifa';

export class ListAllTarifaService {
  public async execute(): Promise<Tarifa[]> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    const tarifas = await tarifasRepository.find();

    return tarifas;
  }
}
