const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderContentsSchema = new Schema(
  {
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    dishId: { type: String, required: true },
    orderId: { type: String, required: true },
    dishPrice: { type: String, required: true },
    dishName: { type: String, required: true },
    qty: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const orderContentsModel = mongoose.model("ordercontent", orderContentsSchema);
module.exports = orderContentsModel;
