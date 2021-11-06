const Dishes = require("../models/DishesModel");

function handle_request(msg, callback) {
  let newDish = new Dishes({
    restaurantId: msg.restaurantId,
    name: msg.name,
    mainIngredients: msg.mainIngredients,
    price: msg.price,
    description: msg.description,
    dishImage: msg.dishImage,
    dishCategoryId: msg.dishCategoryId,
  });
  newDish.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
