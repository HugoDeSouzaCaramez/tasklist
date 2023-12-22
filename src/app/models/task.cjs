'use strict';

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
  }
  Task.init(
    {
      task: DataTypes.STRING,
      check: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );

  return Task;
};
