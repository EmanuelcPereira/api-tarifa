import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';
import Tarifa from '../typeorm/entities/Tarifa';

interface IRequest {
  origem: string;
  destino: string;
  custo: number;
}

export default class CreateTarifaService {
  public async execute({ origem, destino, custo }: IRequest): Promise<Tarifa> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    const tarifaExists = await tarifasRepository.findByDDD(origem, destino);

    if (tarifaExists) {
      throw new AppError('There is a tarifa for this DDD');
    }

    const tarifa = tarifasRepository.create({ origem, destino, custo });

    await tarifasRepository.save(tarifa);

    return tarifa;
  }
}
