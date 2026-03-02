import { Router } from 'express';
import tarefaRoutes from './modules/tarefas/tarefas.routes'

const routes = Router();

routes.use('/tarefas', tarefaRoutes);

routes.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

routes.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default routes;