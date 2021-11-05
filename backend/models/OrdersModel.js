const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ordersSchema = new Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    restaurantId: { type: String, required: true },
    restaurantName: { type: String, required: true },
    restaurantLocation: { type: String, required: true },
    orderStatus: { type: String, required: true },
    deliveryType: { type: String, required: true },
    userAddressId: { type: String, required: true },
    taxes: { type: String, required: true },
    total: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const ordersModel = mongoose.model("order", ordersSchema);
module.exports = ordersModel;
