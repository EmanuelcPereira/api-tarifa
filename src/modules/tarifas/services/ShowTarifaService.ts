import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';
import Tarifa from '../typeorm/entities/Tarifa';

interface IRequest {
  origem: string;
  destino: string;
}

export default class ShowTarifaService {
  public async execute({
    origem,
    destino,
  }: IRequest): Promise<Tarifa | undefined> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    const tarifa = await tarifasRepository.findByDDD(origem, destino);

    if (!tarifa) {
      throw new AppError('Não existe custo para a rota DDD informada');
    }

    return tarifa;
  }
}
