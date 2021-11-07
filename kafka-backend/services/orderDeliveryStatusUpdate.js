const Orders = require("../models/OrdersModel");

function handle_request(msg, callback) {
  Orders.findOneAndUpdate(
    { _id: msg.orderId },
    { orderStatus: msg.orderStatus },
    { new: true },
    (err, doc) => {
      if (!err) {
        callback(null, doc);
      } else {
        callback(error, "Error");
      }
    }
  );
}

exports.handle_request = handle_request;
