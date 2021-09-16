var db = require("./dbConnection");

// Get Restaurant Details
module.exports = (app) => {
  app.get("/restaurant/details/:id", (req, res) => {
    var sql = "Select * from restaurants where id = " + req.params.id;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Orders by Restaurant Id
module.exports = (app) => {
  app.get("/orders/get/restaurant/:restaurantid", (req, res) => {
    var sql =
      "Select * from orders where restaurant_id = " + req.params.restaurantid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get User Details
module.exports = (app) => {
  app.get("/user/details/:id", (req, res) => {
    var sql = "Select * from users where id = " + req.params.id;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get all restaurants
module.exports = (app) => {
  app.get("/restaurants/all", (req, res) => {
    var sql = "Select * from restaurants";
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Dishes by Restaurant Id
module.exports = (app) => {
  app.get("/dishes/get/:restaurantid", (req, res) => {
    var sql =
      "Select * from dishes where restaurant_id = " + req.params.restaurantid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Cart by User Id
module.exports = (app) => {
  app.get("/cart/get/:userid", (req, res) => {
    var sql = "Select * from user_cart where user_id = " + req.params.userid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get User Addresses
module.exports = (app) => {
  app.get("/addresses/get/:userid", (req, res) => {
    var sql =
      "Select * from user_addresses where user_id = " + req.params.userid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Orders by User Id
module.exports = (app) => {
  app.get("/orders/get/user/:userid", (req, res) => {
    var sql = "Select * from orders where user_id = " + req.params.userid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Order Details
module.exports = (app) => {
  app.get("/order/details/:id", (req, res) => {
    var sql = "Select * from orders where id = " + req.params.id;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get User favourites
module.exports = (app) => {
  app.get("/favourites/:userid", (req, res) => {
    var sql =
      "Select * from user_favourites where user_id = " + req.params.userid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Cart Count
module.exports = (app) => {
  app.get("/cart/count/:userid", (req, res) => {
    var sql =
      "Select count(id) from user_cart where user_id = " +
      req.params.userid +
      " and cart_status = 'AC'";
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Countries
module.exports = (app) => {
  app.get("/countries", (req, res) => {
    var sql = "Select * from countries";
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Restaurant Images
module.exports = (app) => {
  app.get("/restaurant/images/:restaurantid", (req, res) => {
    var sql =
      "Select * from restaurant_images where restaurant_id = " +
      req.params.restaurantid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};

// Get Dish Images
module.exports = (app) => {
  app.get("/dish/images/:dishid", (req, res) => {
    var sql = "Select * from dish_images where dish_id = " + req.params.dishid;
    db.query(sql, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
};
