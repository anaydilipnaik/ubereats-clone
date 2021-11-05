const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userLocationsSchema = new Schema(
  {
    userId: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    active: { type: String, default: "1" },
  },
  {
    versionKey: false,
  }
);

const userLocationsModel = mongoose.model("userlocation", userLocationsSchema);
module.exports = userLocationsModel;
