const Dishes = require("../models/DishesModel");

function handle_request(msg, callback) {
  Dishes.findOneAndUpdate(
    { _id: msg.dishId },
    {
      restaurantId: msg.restaurantId,
      name: msg.name,
      mainIngredients: msg.mainIngredients,
      price: msg.price,
      description: msg.description,
      dishImage: msg.dishImage,
      dishCategoryId: msg.dishCategoryId,
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
