import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';

interface IRequest {
  id: string;
}

export class DeleteTarifaService {
  public async execute({ id }: IRequest): Promise<void> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    const tarifa = await tarifasRepository.findById(id);

    if (!tarifa) {
      throw new AppError('Tarifa não cadastrada');
    }

    await tarifasRepository.remove(tarifa);
  }
}
