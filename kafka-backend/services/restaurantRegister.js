const Restaurants = require("../models/RestaurantsModel");

function handle_request(msg, callback) {
  let newRestaurant = new Restaurants({
    name: msg.name,
    location: msg.location,
    email: msg.email,
    password: msg.password,
  });
  newRestaurant.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
