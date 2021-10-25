const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ordersSchema = new Schema(
  {
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
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
