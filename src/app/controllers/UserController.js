import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Sequelize = require('sequelize');
const sequelize = require('../models/index.cjs').sequelize;
const User = require('../models/user.cjs')(
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
}

export default UserController;
