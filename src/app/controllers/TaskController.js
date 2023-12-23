import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Sequelize = require('sequelize');
const sequelize = require('../models/index.cjs').sequelize;
const Task = require('../models/Task.cjs')(
  sequelize,
  Sequelize.DataTypes,
  Sequelize.Model,
  Sequelize.BelongsTo
);

const Yup = require('yup');

class TaskController {
  static async index(req, res) {
    const tasks = await Task.findAll({
      where: { user_id: req.userId, check: false },
    });
    return res.json(tasks);
  }

  static async store(req, res) {
    const schema = Yup.object().shape({
      task: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao cadastrar.' });
    }

    const { task } = req.body;
    await sequelize.query(
      `INSERT INTO tasks (user_id, task) VALUES ('${req.userId}', '${task}');`
    );
    /*const tasks = await Task.create({
      user_id: req.userId,
      task,
    });*/

    return res.status(201).json({
      message: 'Tarefa criada com sucesso.',
    });
  }
}

export default TaskController;
