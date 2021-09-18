require("dotenv").config();

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var db = require("./dbConnection");
var pool = require("./queryBuilder");

// Get all restaurants
app.get("/restaurants/all", (req, res) => {
  var sql = "Select * from restaurants where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get restaurant details by id
app.get("/restaurant/details/:id", (req, res) => {
  var sql = "Select * from restaurants where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get orders by restaurant id
app.get("/orders/get/restaurant/:restaurantid", (req, res) => {
  var sql =
    "Select * from orders where restaurant_id = " + req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get user details by id
app.get("/user/details/:id", (req, res) => {
  var sql = "Select * from users where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get dishes by restaurant id
app.get("/dishes/get/:restaurantid", (req, res) => {
  var sql =
    "Select * from dishes where restaurant_id = " + req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get cart details by user id
app.get("/cart/get/:userid", (req, res) => {
  var sql = "Select * from user_cart where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get user addresses
app.get("/addresses/get/:userid", (req, res) => {
  var sql = "Select * from user_addresses where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get orders by user id
app.get("/orders/get/user/:userid", (req, res) => {
  var sql = "Select * from orders where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get order details by id
app.get("/order/details/:id", (req, res) => {
  var sql = "Select * from orders where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get user favourites
app.get("/favourites/:userid", (req, res) => {
  var sql =
    "Select * from user_favourites where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get cart count
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

// Get all countries
app.get("/countries", (req, res) => {
  var sql = "Select * from countries";
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get restaurant images by restaurant id
app.get("/restaurant/images/:restaurantid", (req, res) => {
  var sql =
    "Select * from restaurant_images where restaurant_id = " +
    req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Get dish images by dish id
app.get("/dish/images/:dishid", (req, res) => {
  var sql = "Select * from dish_images where dish_id = " + req.params.dishid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Register user
app.post("/registerUser", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("users", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Register restaurant
app.post("/registerRestaurant", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("restaurants", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Place order
app.post("/placeOrder", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("orders", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Add user address
app.post("/addUserAddress", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_addresses", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Add to favourites
app.post("/addToFavourites", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_favourites", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Add dish
app.post("/addDish", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("dishes", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Add to cart
app.post("/addToCart", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_cart", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

// Login user
app.post("/loginUser", (req, res) => {
  var sql =
    "Select * from users where email = '" +
    req.body.email +
    "' and password = '" +
    req.body.password +
    "'";
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Login restaurant
app.post("/loginRestaurant", (req, res) => {
  var sql =
    "Select * from restaurants where email = '" +
    req.body.email +
    "' and password = '" +
    req.body.password +
    "'";
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

// Update user details
app.put("/updateUser/:userid", (req, res) => {
  pool.get_connection((qb) => {
    qb.update("users", req.body, { id: req.params.userid }, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
});

// Update restaurant details
app.put("/updateRestaurant/:restaurantid", (req, res) => {
  pool.get_connection((qb) => {
    qb.update(
      "restaurants",
      req.body,
      { id: req.params.restaurantid },
      (err, response) => {
        if (err) console.log(err);
        res.send(response);
      }
    );
  });
});

// Update order delivery status
app.put("/updateOrderDeliveryStatus/:orderid", (req, res) => {
  pool.get_connection((qb) => {
    qb.update(
      "orders",
      req.body,
      { id: req.params.orderid },
      (err, response) => {
        if (err) console.log(err);
        res.send(response);
      }
    );
  });
});

// Update dish
app.put("/updateDish/:dishid", (req, res) => {
  pool.get_connection((qb) => {
    qb.update(
      "dishes",
      req.body,
      { id: req.params.dishid },
      (err, response) => {
        if (err) console.log(err);
        res.send(response);
      }
    );
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
