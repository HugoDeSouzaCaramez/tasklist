import { Router } from 'express';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const Sequelize = require('sequelize');
const sequelize = require('./app/models/index.cjs').sequelize;
const User = require('./app/models/user.cjs')(
  sequelize,
  Sequelize.DataTypes,
  Sequelize.Model
);

const routes = new Router();

routes.get('/teste', async (req, res) => {
  User.create;
  const user = await User.create({
    name: 'Hugo',
    email: 'hugo@teste.com',
    password_hash: '123',
  });

  return res.json(user);
});

export default routes;
