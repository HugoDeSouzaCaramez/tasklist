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
    const tasks = await Task.create({
      user_id: req.userId,
      task,
    });

    return res.status(201).json({
      tasks,
    });
  }

  static async update(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id);

    if (!task) {
      return res.status(400).json({ error: 'Tarefa não existe.' });
    }

    if (task.user_id !== req.userId) {
      return res.status(401).json({ error: 'Requisição não autorizada.' });
    }

    await task.update(req.body);

    return res.status(201).json(task);
  }

  static async delete(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id);

    console.log('task: ' + task);

    if (!task) {
      return res.status(400).json({ error: 'Tarefa não existe.' });
    }

    if (task.user_id !== req.userId) {
      return res.status(401).json({ error: 'Requisição não autorizada.' });
    }

    task
      .destroy()
      .then((result) => res.sendStatus(204))
      .catch((error) => {
        res
          .status(412)
          .json({ message: 'Houve um erro. A tarefa não pôde ser deletada' });
      });
  }
}

export default TaskController;
