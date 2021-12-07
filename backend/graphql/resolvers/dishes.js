const { AuthenticationError, UserInputError } = require("apollo-server");

const DishTypes = require("../../models/DishTypesModel");
const Dish = require("../../models/DishesModel");

module.exports = {
  Query: {
    async getDishTypes() {
      try {
        const dishTypes = await DishTypes.find();
        return dishTypes;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getDishesByRestaurantId(_, { restaurantId }) {
      try {
        const dishes = await Dish.find({ restaurantId: restaurantId });
        if (dishes) {
          return dishes;
        } else {
          throw new Error("Dish not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
