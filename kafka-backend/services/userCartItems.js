const UserCartItems = require("../models/UserCartItemsModel");

function handle_request(msg, callback) {
  UserCartItems.find({ userId: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
