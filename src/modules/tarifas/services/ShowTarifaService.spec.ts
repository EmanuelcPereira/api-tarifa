import AppError from '@shared/errors/AppError';
import FakeTarifaRepository from '../domain/Repositories/Fakes/FakeTarifasRepository';
import ShowTarifaService from './ShowTarifaService';

let fakeTarifaRepository: FakeTarifaRepository;
let showTarifa: ShowTarifaService;

describe('DeleteTarefa', () => {
  beforeEach(() => {
    fakeTarifaRepository = new FakeTarifaRepository();
    showTarifa = new ShowTarifaService(fakeTarifaRepository);
  });

  it('should be able to show an expecific tarifa', async () => {
    const tarifa = await fakeTarifaRepository.create({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    const show = await showTarifa.execute({
      id: tarifa.id,
    });

    expect(show.origem).toBe('011');
    expect(show.destino).toBe('016');
  });

  it('should not be able to show a non-existing tarifa', async () => {
    await expect(
      showTarifa.execute({
        id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
