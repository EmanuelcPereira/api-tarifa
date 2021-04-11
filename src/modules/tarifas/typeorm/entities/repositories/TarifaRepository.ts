import { EntityRepository, Repository } from 'typeorm';
import Tarifa from '../Tarifa';

@EntityRepository(Tarifa)
export default class TarifaRepository extends Repository<Tarifa> {
  public async findByDDD(
    origem: string,
    destino: string,
  ): Promise<Tarifa | undefined> {
    const custoTarifa = this.findOne({ origem, destino });

    return custoTarifa;
  }

  public async findById(id: string): Promise<Tarifa | undefined> {
    const tarifa = await this.findOne(id);

    return tarifa;
  }
}
