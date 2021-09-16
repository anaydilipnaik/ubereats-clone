var db = require("./dbConnection");

module.exports = (app) => {
  app.get("/", (req, res) => {
    var sql = "Select * from users";
    db.query(sql, (err, res) => {
      console.log("err", err);
      console.log("res", res);
    });
  });
};
