const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var dishTypesSchema = new Schema(
  {
    categoryName: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const dishTypesModel = mongoose.model("dishtype", dishTypesSchema);
module.exports = dishTypesModel;
