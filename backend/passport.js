"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var passport_user = require("passport");
var passport_restaurant = require("passport");
var { secret } = require("./config");
const Users = require("./models/UsersModel");
const Restaurants = require("./models/RestaurantsModel");

// Setup work and export for the JWT passport strategy
function auth() {
  var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: secret,
  };
  passport_user.use(
    "user_rule",
    new JwtStrategy(opts, (jwt_payload, callback) => {
      const user_id = jwt_payload._id;
      Users.findById(user_id, (err, results) => {
        if (err) {
          return callback(err, false);
        }
        if (results) {
          callback(null, results);
        } else {
          callback(null, false);
        }
      });
    })
  );
  passport_restaurant.use(
    "restaurant_rule",
    new JwtStrategy(opts, (jwt_payload, callback) => {
      const user_id = jwt_payload._id;
      Restaurants.findById(user_id, (err, results) => {
        if (err) {
          return callback(err, false);
        }
        if (results) {
          callback(null, results);
        } else {
          callback(null, false);
        }
      });
    })
  );
}

exports.auth = auth;
exports.checkAuth = passport_user.authenticate("user_rule", { session: false });
exports.checkAuthRestaurant = passport_restaurant.authenticate(
  "restaurant_rule",
  { session: false }
);
