const Dishes = require("../models/DishesModel");

function handle_request(msg, callback) {
  Dishes.find({ restaurantId: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
