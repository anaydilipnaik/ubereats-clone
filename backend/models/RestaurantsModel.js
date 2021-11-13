const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var restaurantsSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    restaurantImage: { type: String },
    address: { type: String },
    email: { type: String, required: true },
    phoneNo: { type: String },
    timings: { type: String },
    isDelivery: { type: String },
    isPickup: { type: String },
    password: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const restaurantsModel = mongoose.model("restaurant", restaurantsSchema);
module.exports = restaurantsModel;
