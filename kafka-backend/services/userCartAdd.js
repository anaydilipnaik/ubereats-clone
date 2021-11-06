const UserCartItems = require("../models/UserCartItemsModel");

function handle_request(msg, callback) {
  let newUserCartItem = new UserCartItems({
    restaurantId: msg.restaurantId,
    dishId: msg.dishId,
    userId: msg.userId,
    cartStatus: msg.cartStatus,
    deliveryType: msg.deliveryType,
    dishPrice: msg.dishPrice,
    qty: msg.qty,
    dishName: msg.dishName,
    dishImage: msg.dishImage,
    dishPrice: msg.dishPrice,
    dishDescription: msg.dishDescription,
    restaurantName: msg.restaurantName,
  });
  newUserCartItem.save((error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
