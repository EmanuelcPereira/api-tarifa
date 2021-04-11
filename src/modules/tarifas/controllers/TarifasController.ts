import { Request, Response } from 'express';
import CreateTarifaService from '../services/CreateTarifaService';
import { DeleteTarifaService } from '../services/DeleteTarifaService';
import ShowTarifaService from '../services/ShowTarifaService';

export default class TarifasController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTarifa = new ShowTarifaService();

    const tarifa = await showTarifa.execute({ id });

    return response.json(tarifa);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { origem, destino, custo } = request.body;

    const createTarifa = new CreateTarifaService();

    const tarifa = await createTarifa.execute({ origem, destino, custo });

    return response.json(tarifa);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTarifa = new DeleteTarifaService();

    await deleteTarifa.execute({ id });

    return response.json([]);
  }
}
