const Users = require("../models/UsersModel");

function handle_request(msg, callback) {
  let newUser = new Users({
    firstName: msg.firstName,
    middleName: msg.middleName,
    lastName: msg.lastName,
    email: msg.email,
    city: msg.city,
    password: msg.password,
  });
  newUser.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
