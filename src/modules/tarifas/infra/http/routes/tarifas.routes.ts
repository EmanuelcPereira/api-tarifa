import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import TarifasController from '../controllers/TarifasController';

const tarifasRouter = Router();
const tarifasController = new TarifasController();

tarifasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  tarifasController.show,
);

tarifasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      origem: Joi.string().required(),
      destino: Joi.string().required(),
      custo: Joi.number().precision(2).required(),
    },
  }),
  tarifasController.create,
);

tarifasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  tarifasController.delete,
);

tarifasRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  celebrate({
    [Segments.BODY]: {
      origem: Joi.string().required(),
      destino: Joi.string().required(),
      custo: Joi.number().precision(2).required(),
    },
  }),
  tarifasController.update,
);

tarifasRouter.get('/', tarifasController.listAll);

export default tarifasRouter;
