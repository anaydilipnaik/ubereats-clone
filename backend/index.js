require("dotenv").config();

var express = require("express");
var app = express();
app.use(express.json());

const cors = require("cors");
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

const apiRouter = require("./routes/routes");
app.use("/", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
