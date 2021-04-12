import FakeTarifaRepository from '../domain/Repositories/Fakes/FakeTarifasRepository';
import { ListAllTarifaService } from './ListAllTarifaService';

let fakeTarifaRepository: FakeTarifaRepository;
let listAllTarifas: ListAllTarifaService;

describe('DeleteTarefa', () => {
  beforeEach(() => {
    fakeTarifaRepository = new FakeTarifaRepository();
    listAllTarifas = new ListAllTarifaService(fakeTarifaRepository);
  });

  it('should be able to list all tarifas', async () => {
    expect(listAllTarifas.execute());
  });
});
