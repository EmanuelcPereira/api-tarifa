import AppError from '@shared/errors/AppError';
import FakeTarifaRepository from '../domain/Repositories/Fakes/FakeTarifasRepository';
import CreateTarifaService from './CreateTarifaService';

let fakeTarifaRepository: FakeTarifaRepository;
let createTarifa: CreateTarifaService;

describe('CreateTarifa', () => {
  beforeEach(() => {
    fakeTarifaRepository = new FakeTarifaRepository();
    createTarifa = new CreateTarifaService(fakeTarifaRepository);
  });

  it('should be able to create a new tarifa', async () => {
    const tarifa = await createTarifa.execute({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    expect(tarifa).toHaveProperty('id');
  });

  it('should not be able to create a new tarifa if origem is equal destino', async () => {
    await expect(
      createTarifa.execute({
        origem: '011',
        destino: '011',
        custo: 1.9,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a rota with it already exists', async () => {
    await createTarifa.execute({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    await expect(
      createTarifa.execute({
        origem: '011',
        destino: '016',
        custo: 1.9,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
