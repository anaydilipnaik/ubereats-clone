const Users = require("../models/UsersModel");

function handle_request(msg, callback) {
  Users.findOneAndUpdate(
    { _id: msg.userId },
    {
      firstName: msg.firstName,
      middleName: msg.middleName,
      lastName: msg.lastName,
      email: msg.email,
      phoneNo: msg.phoneNo,
      displayPicture: msg.displayPicture,
      dob: msg.dob,
      city: msg.city,
      state: msg.state,
      country: msg.country,
      nickname: msg.nickname,
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
