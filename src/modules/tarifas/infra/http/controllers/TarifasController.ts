import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTarifaService from '../../../services/CreateTarifaService';
import { DeleteTarifaService } from '../../../services/DeleteTarifaService';
import { ListAllTarifaService } from '../../../services/ListAllTarifaService';
import ShowTarifaService from '../../../services/ShowTarifaService';
import { UpdateTarifaService } from '../../../services/UpdateTarifaService';

export default class TarifasController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTarifa = container.resolve(ShowTarifaService);

    const tarifa = await showTarifa.execute({ id });

    return response.json(tarifa);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { origem, destino, custo } = request.body;

    const createTarifa = container.resolve(CreateTarifaService);

    const tarifa = await createTarifa.execute({ origem, destino, custo });

    return response.json(tarifa);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTarifa = container.resolve(DeleteTarifaService);

    await deleteTarifa.execute({ id });

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { origem, destino, custo } = request.body;

    const updateTarifa = container.resolve(UpdateTarifaService);

    const tarifa = await updateTarifa.execute({ id, origem, destino, custo });

    return response.json(tarifa);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listTarifas = container.resolve(ListAllTarifaService);

    const tarifas = await listTarifas.execute();

    return response.json(tarifas);
  }
}
