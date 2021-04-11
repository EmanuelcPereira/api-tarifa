import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { ICreateTarifa } from '../domain/models/ICreateTarifa';
import { ITarifasRepository } from '../domain/Repositories/ITarifasRepository';
import { ITarifa } from '../domain/models/ITarifa';

@injectable()
export default class CreateTarifaService {
  constructor(
    @inject('TarifasRepository')
    private tarifasRepository: ITarifasRepository,
  ) {}

  public async execute({
    origem,
    destino,
    custo,
  }: ICreateTarifa): Promise<ITarifa> {
    if (origem === destino) {
      throw new AppError(
        'Não é possível criar uma rota para mesma origem e destino',
      );
    }

    const tarifaExists = await this.tarifasRepository.findByDDD(
      origem,
      destino,
    );

    if (tarifaExists) {
      throw new AppError('Já existe uma tarifa para essa rota DDD');
    }

    const tarifa = await this.tarifasRepository.create({
      origem,
      destino,
      custo,
    });

    return tarifa;
  }
}
