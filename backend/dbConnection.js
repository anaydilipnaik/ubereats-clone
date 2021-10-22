var mysql = require("mysql");

/* WITH CONNECTION POOLING */
var con = mysql.createPool({
  connectionLimit: 500,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

/* WITHOUT CONNECTION POOLING */
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to the database!");
// });

module.exports = con;
