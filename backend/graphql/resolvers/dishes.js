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
  Mutation: {
    async addDish(_, { dishInput }) {
      let newDish = new Dish({
        restaurantId: dishInput.restaurantId,
        name: dishInput.name,
        mainIngredients: dishInput.mainIngredients,
        price: dishInput.price,
        description: dishInput.description,
        dishImage: dishInput.dishImage,
        dishCategoryId: dishInput.dishCategoryId,
      });
      const dish = await newDish.save();
      if (dish) {
        return dish;
      } else {
        throw new Error("Error");
      }
    },
    async updateDish(_, { dishInput }) {
      const dish = await Dish.findOneAndUpdate(
        { _id: dishInput.id },
        {
          restaurantId: dishInput.restaurantId,
          name: dishInput.name,
          mainIngredients: dishInput.mainIngredients,
          price: dishInput.price,
          description: dishInput.description,
          dishImage: dishInput.dishImage,
          dishCategoryId: dishInput.dishCategoryId,
        },
        { new: true }
      );
      if (dish) {
        return dish;
      } else {
        throw new Error("Error");
      }
    },
  },
};
