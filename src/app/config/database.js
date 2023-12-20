module.exports = {
  dialect: 'sqlite',
  database: 'tasklist',
  host: 'localhost',
  username: 'admin',
  password: '123',
  params: {
    storage: 'tasklist.sqlite',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
