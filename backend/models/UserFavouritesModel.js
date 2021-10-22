const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userFavouritesSchema = new Schema(
  {
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const userFavouritesModel = mongoose.model(
  "userFavourite",
  userFavouritesSchema
);
module.exports = userFavouritesModel;
