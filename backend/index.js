var express = require("express");

var app = express();

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "ubereats-db.cz3xhefv1lvq.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "ubereatsadmin",
  database: "ubereats",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// var sql = "Select * from users";
// con.query(sql, (err, res) => {
//   console.log("err", err);
//   console.log("res", res);
// });
