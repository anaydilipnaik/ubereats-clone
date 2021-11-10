const Orders = require("../models/OrdersModel");

function handle_request(msg, callback) {
  Orders.find(
    { userId: msg.userId, orderStatus: msg.orderStatus },
    (error, doc) => {
      if (error) {
        callback(error, "Error");
      } else {
        callback(null, doc);
      }
    }
  );
}

exports.handle_request = handle_request;
