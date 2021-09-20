var db = require("../dbConnection");
var pool = require("../queryBuilder");

let apiModel = {};

apiModel.getCountries = () => {
  return new Promise((resolve, reject) => {
    var query = "Select * from countries";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getAllRestaurants = () => {
  return new Promise((resolve, reject) => {
    var query = "Select * from restaurants";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getRestaurantDetailsById = (restaurantId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from restaurants where id = " + restaurantId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getOrdersByRestaurantId = (restaurantId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from orders where restaurant_id = " + restaurantId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from users where id = " + userId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getDishesByRestaurantId = (restaurantId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from dishes where restaurant_id = " + restaurantId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getUserCart = (userId) => {
  return new Promise((resolve, reject) => {
    var query =
      "Select * from user_cart where user_id = " +
      userId +
      " and cart_status = 'AC'";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getUserAddresses = (userId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from user_addresses where user_id = " + userId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getOrdersByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from orders where user_id = " + userId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getOrderDetailsById = (orderId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from orders where id = " + orderId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getUserFavourites = (userId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from user_favourites where user_id = " + userId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getCartCount = (userId) => {
  return new Promise((resolve, reject) => {
    var query =
      "Select count(id) as cart_count from user_cart where user_id = " + userId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getRestaurantImages = (restaurantId) => {
  return new Promise((resolve, reject) => {
    var query =
      "Select * from restaurant_images where restaurant_id = " + restaurantId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.getDishImages = (dishId) => {
  return new Promise((resolve, reject) => {
    var query = "Select * from dish_images where dish_id = " + dishId;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.registerUser = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("users", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.registerRestaurant = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("restaurants", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.placeOrder = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("orders", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.addAddress = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("user_addresses", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.addToFavourites = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("user_favourites", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.addDish = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("dishes", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.addToCart = (dataJson) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.insert("user_cart", dataJson, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.loginUser = (dataJson) => {
  return new Promise((resolve, reject) => {
    var query =
      "Select * from users where email = '" +
      dataJson.email +
      "' and password = '" +
      dataJson.password +
      "'";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.loginRestaurant = (dataJson) => {
  return new Promise((resolve, reject) => {
    var query =
      "Select * from restaurants where email = '" +
      dataJson.email +
      "' and password = '" +
      dataJson.password +
      "'";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

apiModel.updateUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.update("users", req.body, { id: userId }, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.updateRestaurantDetails = (restaurantId) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.update(
        "restaurants",
        req.body,
        { id: restaurantId },
        (err, results) => {
          if (err) return reject(err);
          return resolve(results);
        }
      );
    });
  });
};

apiModel.updateOrderDeliveryStatus = (orderId) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.update("orders", req.body, { id: orderId }, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

apiModel.updateDish = (dishId) => {
  return new Promise((resolve, reject) => {
    pool.get_connection((qb) => {
      qb.update("dishes", req.body, { id: dishId }, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  });
};

module.exports = apiModel;