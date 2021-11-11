const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userFavouritesSchema = new Schema(
  {
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    restaurantName: { type: String, required: true },
    restaurantLocation: { type: String, required: true },
    restaurantImage: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const userFavouritesModel = mongoose.model(
  "userfavourite",
  userFavouritesSchema
);
module.exports = userFavouritesModel;
