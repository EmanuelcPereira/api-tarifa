import TarifaRepository from '../infra/typeorm/repositories/TarifaRepository';
import CreateTarifaService from './CreateTarifaService';

let tarifaRepository: TarifaRepository;
let createTarifa: CreateTarifaService;

describe('CreateTarifa', () => {
  beforeEach(() => {
    tarifaRepository = new TarifaRepository();
    createTarifa = new CreateTarifaService(tarifaRepository);
  });

  it('should be able to create a new tarifa', async () => {
    const tarifa = await createTarifa.execute({
      origem: '011',
      destino: '016',
      custo: 1.9,
    });

    expect(tarifa).toHaveProperty('id');
  });
});
