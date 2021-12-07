const { AuthenticationError, UserInputError } = require("apollo-server");

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
};
