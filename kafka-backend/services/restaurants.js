const Restaurants = require("../models/RestaurantsModel");

function handle_request(msg, callback) {
  Restaurants.findOne({ _id: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
