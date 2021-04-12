import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITarifasRepository } from '../domain/Repositories/ITarifasRepository';
import Tarifa from '../infra/typeorm/entities/Tarifa';

interface IRequest {
  id: string;
}

@injectable()
export default class ShowTarifaService {
  constructor(
    @inject('TarifasRepository')
    private tarifasRepository: ITarifasRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Tarifa> {
    const tarifa = await this.tarifasRepository.findById(id);

    if (!tarifa) {
      throw new AppError(
        'Não existe custo cadastrado para a rota DDD informada',
      );
    }

    return tarifa;
  }
}
