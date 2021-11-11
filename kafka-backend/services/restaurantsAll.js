const Restaurants = require("../models/RestaurantsModel");

function handle_request(msg, callback) {
  Restaurants.find({}, (error, result) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, result);
    }
  });
}

exports.handle_request = handle_request;
