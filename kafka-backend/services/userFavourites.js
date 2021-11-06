const UserFavourites = require("../models/UserFavouritesModel");

function handle_request(msg, callback) {
  UserFavourites.find({ userId: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
