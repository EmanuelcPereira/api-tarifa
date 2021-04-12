import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITarifasRepository } from '../domain/Repositories/ITarifasRepository';
import Tarifa from '../infra/typeorm/entities/Tarifa';

interface IRequest {
  id: string;
  origem: string;
  destino: string;
  custo: number;
}
@injectable()
export class UpdateTarifaService {
  constructor(
    @inject('TarifasRepository')
    private tarifasRepository: ITarifasRepository,
  ) {}

  public async execute({
    id,
    origem,
    destino,
    custo,
  }: IRequest): Promise<Tarifa> {
    if (origem === destino) {
      throw new AppError(
        'Não é possível atualizar uma tarifa com origem e destino iguais',
      );
    }

    const tarifa = await this.tarifasRepository.findById(id);

    if (!tarifa) {
      throw new AppError('tarifa não encontrada');
    }

    const productExists = await this.tarifasRepository.findByDDD(
      origem,
      destino,
    );

    if (productExists) {
      throw new AppError(
        'Já existe uma tarifa cadastrada com essa origem e destino',
      );
    }

    tarifa.origem = origem;
    tarifa.destino = destino;
    tarifa.custo = custo;

    await this.tarifasRepository.save(tarifa);

    return tarifa;
  }
}
