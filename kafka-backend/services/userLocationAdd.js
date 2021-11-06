const UserLocations = require("../models/UserLocationsModel");

function handle_request(msg, callback) {
  let newAddress = new UserLocations({
    address1: msg.address1,
    address2: msg.address2,
    userId: msg.userId,
    landmark: msg.landmark,
    city: msg.city,
    state: msg.state,
  });
  newAddress.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
