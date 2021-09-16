require("dotenv").config();

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var routes = require("./routes");
routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
