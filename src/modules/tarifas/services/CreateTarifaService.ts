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

    if (origem === destino) {
      throw new AppError(
        'Não é possível criar uma rota para mesma origem e destino',
      );
    }

    const tarifaExists = await tarifasRepository.findByDDD(origem, destino);

    if (tarifaExists) {
      throw new AppError('Já existe uma tarifa para essa rota DDD');
    }

    const tarifa = tarifasRepository.create({ origem, destino, custo });

    await tarifasRepository.save(tarifa);

    return tarifa;
  }
}
