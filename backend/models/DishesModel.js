const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var dishesSchema = new Schema(
  {
    restaurantId: { type: String, required: true },
    name: { type: String, required: true },
    mainIngredients: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    dishImage: { type: String },
    dishCategoryId: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const dishesModel = mongoose.model("dish", dishesSchema);
module.exports = dishesModel;
