import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TarifaRepository from '../typeorm/entities/repositories/TarifaRepository';
import Tarifa from '../typeorm/entities/Tarifa';

interface IRequest {
  id: string;
  origem: string;
  destino: string;
  custo: number;
}

export class UpdateTarifaService {
  public async execute({
    id,
    origem,
    destino,
    custo,
  }: IRequest): Promise<Tarifa> {
    const tarifasRepository = getCustomRepository(TarifaRepository);

    if (origem === destino) {
      throw new AppError(
        'Não é possível criar uma rota para mesma origem e destino',
      );
    }

    const tarifa = await tarifasRepository.findOne(id);

    if (!tarifa) {
      throw new AppError('tarifa não encontrada');
    }

    const productExists = await tarifasRepository.findByDDD(origem, destino);

    if (productExists) {
      throw new AppError(
        'Já existe uma tarifa cadastrada com essa origem e destino',
      );
    }

    tarifa.origem = origem;
    tarifa.destino = destino;
    tarifa.custo = custo;

    await tarifasRepository.save(tarifa);

    return tarifa;
  }
}
