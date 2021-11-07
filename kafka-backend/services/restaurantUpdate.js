const Restaurants = require("../models/RestaurantsModel");

function handle_request(msg, callback) {
  Restaurants.findOneAndUpdate(
    { _id: msg.restaurantId },
    {
      name: msg.firstName,
      location: msg.firstName,
      description: msg.firstName,
      restaurantImage: msg.firstName,
      address: msg.firstName,
      email: msg.firstName,
      phoneNo: msg.firstName,
      timings: msg.firstName,
      isDelivery: msg.firstName,
      isPickup: msg.firstName,
    },
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
