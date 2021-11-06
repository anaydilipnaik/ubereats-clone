const Users = require("../models/UsersModel");

function handle_request(msg, callback) {
  Users.findOne({ email: msg.email, password: msg.password }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
