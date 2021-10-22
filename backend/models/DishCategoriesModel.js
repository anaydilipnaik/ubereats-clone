const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var dishCategoriesSchema = new Schema(
  {
    categoryName: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const dishCategoriesModel = mongoose.model(
  "dishCategory",
  dishCategoriesSchema
);
module.exports = dishCategoriesModel;
