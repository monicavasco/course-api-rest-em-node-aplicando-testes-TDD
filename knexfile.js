// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '39296154',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    }
  },
};
