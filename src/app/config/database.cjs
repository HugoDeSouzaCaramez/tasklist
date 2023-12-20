module.exports = {
  development: {
    username: 'root',
    password: '1234',
    database: 'database_development',
    host: '0.0.0.0',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '1234',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '1234',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
