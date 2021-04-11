import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITarifasRepository } from '../domain/Repositories/ITarifasRepository';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteTarifaService {
  constructor(
    @inject('TarifasRepository')
    private tarifasRepository: ITarifasRepository,
  ) {}
  public async execute({ id }: IRequest): Promise<void> {
    const tarifa = await this.tarifasRepository.findById(id);

    if (!tarifa) {
      throw new AppError('Tarifa não cadastrada');
    }

    await this.tarifasRepository.remove(tarifa);
  }
}
