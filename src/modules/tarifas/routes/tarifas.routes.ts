import { Router } from 'express';
import TarifasController from '../controllers/TarifasController';

const tarifasRouter = Router();
const tarifasController = new TarifasController();

tarifasRouter.get('/:id', tarifasController.show);
tarifasRouter.post('/', tarifasController.create);
tarifasRouter.delete('/:id', tarifasController.delete);
tarifasRouter.put('/:id', tarifasController.update);
tarifasRouter.get('/', tarifasController.listAll);

export default tarifasRouter;
