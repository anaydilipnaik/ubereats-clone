const Users = require("../models/UsersModel");

function handle_request(msg, callback) {
  Users.findOne({ _id: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
