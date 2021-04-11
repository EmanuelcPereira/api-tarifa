import { Router } from 'express';
import tarifasRouter from '@modules/tarifas/infra/http/routes/tarifas.routes';

const routes = Router();

routes.use('/tarifas', tarifasRouter);

export default routes;
