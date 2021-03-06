const config = {
  development: {
    username: "root",
    password: "password",
    database: "blogger",
    host: "localhost",
    dialect: "mysql",
    port: 3306
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.JAWSDB_USERNAME,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DB,
    host: process.env.JAWSDB_HOST,
    dialect: "mysql"
  }
}

module.exports = config;
