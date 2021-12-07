const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userCartItemsSchema = new Schema(
  {
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    cartStatus: { type: String },
    deliveryType: { type: String, required: true },
    dishPrice: { type: String, required: true },
    qty: { type: String, required: true },
    dishId: { type: String, required: true },
    dishName: { type: String, required: true },
    dishImage: { type: String, required: true },
    dishDescription: { type: String, required: true },
    restaurantName: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const userCartItemsModel = mongoose.model("usercartitem", userCartItemsSchema);
module.exports = userCartItemsModel;
