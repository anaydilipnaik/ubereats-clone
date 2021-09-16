var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

module.exports = con;
