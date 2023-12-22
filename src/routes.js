import { Router } from 'express';
import authMiddleware from './app/middlewares/auth.js';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';

const routes = new Router();

routes.post('/users', function (req, res) {
  UserController.store(req, res);
});

routes.post('/sessions', function (req, res) {
  SessionController.store(req, res);
});

routes.use(authMiddleware);

routes.put('/users', function (req, res) {
  UserController.update(req, res);
});

export default routes;
