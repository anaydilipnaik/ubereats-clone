const Orders = require("../models/OrdersModel");

function handle_request(msg, callback, isRestaurant) {
  if (isRestaurant) {
    Orders.find({ restaurantId: msg }, (error, doc) => {
      if (error) {
        callback(error, "Error");
      } else {
        callback(null, doc);
      }
    });
  } else {
    Orders.find({ userId: msg }, (error, doc) => {
      if (error) {
        callback(error, "Error");
      } else {
        callback(null, doc);
      }
    });
  }
}

exports.handle_request = handle_request;
