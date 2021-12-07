const Restaurant = require("../../models/RestaurantsModel");

module.exports = {
  Query: {
    async getRestaurantDetailsById(_, { restaurantId }) {
      try {
        const restaurant = await Restaurant.findById(restaurantId);
        if (restaurant) {
          return restaurant;
        } else {
          throw new Error("Restaurant not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAllRestaurants() {
      try {
        const restaurant = await Restaurant.find();
        if (restaurant) {
          return restaurant;
        } else {
          throw new Error("Restaurants not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async registerRestaurant(_, { registerInput }) {
      let newRestaurant = new Restaurant({
        name: registerInput.name,
        location: registerInput.location,
        email: registerInput.email,
        password: registerInput.password,
      });
      const restaurant = await newRestaurant.save();
      if (restaurant) {
        return restaurant;
      } else {
        throw new Error("Error");
      }
    },
    async loginRestaurant(_, { email, password }) {
      const restaurant = await Restaurant.findOne({
        email: email,
        password: password,
      });
      if (restaurant) {
        return restaurant;
      } else {
        throw new Error("Login Failed");
      }
    },
  },
};
