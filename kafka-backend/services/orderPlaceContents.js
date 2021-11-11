const OrderContents = require("../models/OrderContentsModel");

function handle_request(msg, callback) {
  let newOrderContents = new OrderContents({
    userId: msg.orderId,
    restaurantId: msg.restaurantId,
    dishId: msg.dishId,
    orderId: msg.orderId,
    dishPrice: msg.dishPrice,
    dishName: msg.dishName,
    qty: msg.qty,
  });
  newOrderContents.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
