import AppError from '@shared/errors/AppError';
import FakeTarifaRepository from '../domain/Repositories/Fakes/FakeTarifasRepository';
import { UpdateTarifaService } from './UpdateTarifaService';

let fakeTarifaRepository: FakeTarifaRepository;
let updateTarifa: UpdateTarifaService;

describe('UpdateTarefa', () => {
  beforeEach(() => {
    fakeTarifaRepository = new FakeTarifaRepository();
    updateTarifa = new UpdateTarifaService(fakeTarifaRepository);
  });

  it('should be able to update a tarifa', async () => {
    const tarifa = await fakeTarifaRepository.create({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    const updatedTarifa = await updateTarifa.execute({
      id: tarifa.id,
      origem: '016',
      destino: '011',
      custo: tarifa.custo,
    });

    expect(updatedTarifa.origem).toBe('016');
    expect(updatedTarifa.destino).toBe('011');
    expect(updatedTarifa.custo).toBe(tarifa.custo);
  });

  it('should not be able to update a non-existent tarifa', async () => {
    await expect(
      updateTarifa.execute({
        id: 'non-existent-id',
        origem: '011',
        destino: '016',
        custo: 1.9,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a tarifa with the same datas already registered', async () => {
    const tarifa = await fakeTarifaRepository.create({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    await expect(
      updateTarifa.execute({
        id: tarifa.id,
        origem: tarifa.origem,
        destino: tarifa.destino,
        custo: tarifa.custo,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a tarifa with origem equal destino', async () => {
    const tarifa = await fakeTarifaRepository.create({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    await expect(
      updateTarifa.execute({
        id: tarifa.id,
        origem: tarifa.origem,
        destino: tarifa.origem,
        custo: tarifa.custo,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
