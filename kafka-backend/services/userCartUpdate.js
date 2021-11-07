const UserCartItems = require("../models/UserCartItemsModel");

function handle_request(msg, callback) {
  UserCartItems.findOneAndUpdate(
    { _id: msg.cartId },
    { qty: msg.qty },
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
