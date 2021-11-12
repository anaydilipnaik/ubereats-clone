const Orders = require("../models/OrdersModel");

function handle_request(msg, callback) {
  let newOrder = new Orders({
    userId: msg.userId,
    address: msg.address,
    restaurantId: msg.restaurantId,
    firstName: msg.firstName,
    lastName: msg.lastName,
    restaurantName: msg.restaurantName,
    orderCount: msg.orderCount,
    createdAt: msg.createdAt,
    restaurantLocation: msg.restaurantLocation,
    specialInstruction: msg.specialInstruction,
    orderStatus: msg.orderStatus,
    deliveryType: msg.deliveryType,
    taxes: msg.taxes,
    total: msg.total,
  });
  newOrder.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
