import { Router  } from "express";
import { createTarefa, getTarefas, updateTarefa, deleteTarefa } from "./tarefas.controller";
import { tarefasMiddleware } from "../../middlewares/tarefas/tarefas.middleware";

const routes = Router();
routes.get('', tarefasMiddleware,getTarefas);
routes.post('', createTarefa);
routes.patch('/:id', updateTarefa);
routes.delete('/:id', deleteTarefa);

export default routes as typeof routes;

