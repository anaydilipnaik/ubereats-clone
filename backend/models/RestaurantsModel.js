const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var restaurantsSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    restaurantImage: { type: String },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    timings: { type: String, required: true },
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
