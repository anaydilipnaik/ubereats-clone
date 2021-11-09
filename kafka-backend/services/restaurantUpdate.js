const Restaurants = require("../models/RestaurantsModel");

function handle_request(msg, callback) {
  Restaurants.findOneAndUpdate(
    { _id: msg.restaurantId },
    {
      name: msg.name,
      location: msg.location,
      description: msg.description,
      restaurantImage: msg.restaurantImage,
      address: msg.address,
      email: msg.email,
      phoneNo: msg.phoneNo,
      timings: msg.timings,
      isDelivery: msg.isDelivery,
      isPickup: msg.isPickup,
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
