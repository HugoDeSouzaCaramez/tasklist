import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Sequelize = require('sequelize');
const sequelize = require('../models/index.cjs').sequelize;
const User = require('../models/User.cjs')(
  sequelize,
  Sequelize.DataTypes,
  Sequelize.Model
);

class UserController {
  static async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Usuário com esse email já existe' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.status(201).json({
      id,
      name,
      email,
    });
  }

  static async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe.' });
      }
    }

    //preencheu oldPassword errado
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = await user.update(req.body);

    return res.status(204).json({
      id,
      name,
      email,
    });
  }
}

export default UserController;
