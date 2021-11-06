const UserFavourites = require("../models/UserFavouritesModel");

function handle_request(msg, callback) {
  let newFavourite = new UserFavourites({
    userId: msg.userId,
    restaurantId: msg.restaurantId,
    restaurantName: msg.restaurantName,
    restaurantLocation: msg.restaurantLocation,
    description: msg.description,
    restaurantImage: msg.restaurantImage,
    address: msg.address,
    email: msg.email,
    phoneNo: msg.phoneNo,
    timings: msg.timings,
    isDelivery: msg.isDelivery,
    isPickup: msg.isPickup,
  });
  newFavourite.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
