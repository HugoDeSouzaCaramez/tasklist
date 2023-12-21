module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: './database.sqlite',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    dialect: 'sqlite',
    storage: './database.sqlite',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
