'use strict';
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.addHook('beforeCreate', async (user) => {
    if (user.password_hash) {
      user.password_hash = await bcrypt.hash(user.password_hash, 8);
    }
  });

  return User;
};
