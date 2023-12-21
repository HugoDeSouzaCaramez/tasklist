import { Router } from 'express';
import UserController from './app/controllers/UserController.js';

const routes = new Router();

routes.post('/users', function (req, res) {
  UserController.store(req, res);
});

export default routes;
