import { inject, injectable } from 'tsyringe';
import { ITarifasRepository } from '../domain/Repositories/ITarifasRepository';
import Tarifa from '../infra/typeorm/entities/Tarifa';

@injectable()
export class ListAllTarifaService {
  constructor(
    @inject('TarifasRepository')
    private tarifasRepository: ITarifasRepository,
  ) {}
  public async execute(): Promise<Tarifa[]> {
    const tarifas = await this.tarifasRepository.findAll();

    return tarifas;
  }
}
