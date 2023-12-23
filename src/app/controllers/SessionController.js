import jwt from 'jsonwebtoken';
import { createRequire } from 'module';
import authConfig from '../config/auth.js';

const require = createRequire(import.meta.url);
const Sequelize = require('sequelize');
const sequelize = require('../models/index.cjs').sequelize;
const User = require('../models/User.cjs')(
  sequelize,
  Sequelize.DataTypes,
  Sequelize.Model
);

class SessionController {
  static async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não existe.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default SessionController;
