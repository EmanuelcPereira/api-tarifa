import { ITarifasRepository } from '@modules/tarifas/domain/Repositories/ITarifasRepository';
import TarifaRepository from '@modules/tarifas/infra/typeorm/repositories/TarifaRepository';
import { container } from 'tsyringe';

container.registerSingleton<ITarifasRepository>(
  'TarifasRepository',
  TarifaRepository,
);
