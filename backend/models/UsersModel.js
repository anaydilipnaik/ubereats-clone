const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String },
    displayPicture: { type: String },
    dob: { type: String },
    city: { type: String, required: true },
    state: { type: String },
    country: { type: String },
    nickname: { type: String },
    password: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const usersModel = mongoose.model("user", usersSchema);
module.exports = usersModel;
