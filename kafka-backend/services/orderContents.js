const OrderContents = require("../models/OrderContentsModel");

function handle_request(msg, callback) {
  Orders.find({ id: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
