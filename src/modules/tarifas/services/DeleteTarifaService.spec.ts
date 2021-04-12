import AppError from '@shared/errors/AppError';
import FakeTarifaRepository from '../domain/Repositories/Fakes/FakeTarifasRepository';
import CreateTarifaService from './CreateTarifaService';
import { DeleteTarifaService } from './DeleteTarifaService';

let fakeTarifaRepository: FakeTarifaRepository;
let deleteTarifa: DeleteTarifaService;
let createTarifa: CreateTarifaService;

describe('DeleteTarefa', () => {
  beforeEach(() => {
    fakeTarifaRepository = new FakeTarifaRepository();
    deleteTarifa = new DeleteTarifaService(fakeTarifaRepository);
    createTarifa = new CreateTarifaService(fakeTarifaRepository);
  });

  it('should be able to delete a tarifa', async () => {
    const tarifa = await createTarifa.execute({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    await deleteTarifa.execute(tarifa);

    expect(200);
  });

  it('should not be able to deleta a non existent tarifa', async () => {
    await expect(
      deleteTarifa.execute({ id: 'dfadfgjakdfjgopaerg' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
