const QueryBuilder = require("node-querybuilder");

const settings = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
};

const pool = new QueryBuilder(settings, "mysql", "pool");

module.exports = pool;
