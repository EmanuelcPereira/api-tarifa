import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';
import Tarifa from '../typeorm/entities/Tarifa';

interface IRequest {
  id: string;
}

export default class ShowTarifaService {
  public async execute({ id }: IRequest): Promise<Tarifa | undefined> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    const tarifa = await tarifasRepository.findById(id);

    if (!tarifa) {
      throw new AppError(
        'Não existe custo cadastrado para a rota DDD informada',
      );
    }

    return tarifa;
  }
}
