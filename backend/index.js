require("dotenv").config();

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var db = require("./dbConnection");
var pool = require("./queryBuilder");

app.get("/restaurants/all", (req, res) => {
  var sql = "Select * from restaurants where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/restaurant/details/:id", (req, res) => {
  var sql = "Select * from restaurants where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/orders/get/restaurant/:restaurantid", (req, res) => {
  var sql =
    "Select * from orders where restaurant_id = " + req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/user/details/:id", (req, res) => {
  var sql = "Select * from users where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/dishes/get/:restaurantid", (req, res) => {
  var sql =
    "Select * from dishes where restaurant_id = " + req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/cart/get/:userid", (req, res) => {
  var sql = "Select * from user_cart where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/addresses/get/:userid", (req, res) => {
  var sql = "Select * from user_addresses where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/orders/get/user/:userid", (req, res) => {
  var sql = "Select * from orders where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/order/details/:id", (req, res) => {
  var sql = "Select * from orders where id = " + req.params.id;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/favourites/:userid", (req, res) => {
  var sql =
    "Select * from user_favourites where user_id = " + req.params.userid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

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

app.get("/countries", (req, res) => {
  var sql = "Select * from countries";
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/restaurant/images/:restaurantid", (req, res) => {
  var sql =
    "Select * from restaurant_images where restaurant_id = " +
    req.params.restaurantid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.get("/dish/images/:dishid", (req, res) => {
  var sql = "Select * from dish_images where dish_id = " + req.params.dishid;
  db.query(sql, (err, response) => {
    if (err) console.log(err);
    res.send(response);
  });
});

app.post("/registerUser", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("users", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/registerRestaurant", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("restaurants", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/placeOrder", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("orders", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/addUserAddress", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_addresses", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/addToFavourites", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_favourites", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/addDish", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("dishes", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

app.post("/addToCart", (req, res) => {
  pool.get_connection((qb) => {
    qb.insert("user_cart", req.body, (err, response) => {
      res.send(response);
      console.log(response);
      console.log(err);
    });
  });
});

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

app.put("/updateUser/:userid", (req, res) => {
  pool.get_connection((qb) => {
    qb.update("users", req.body, { id: req.params.userid }, (err, response) => {
      if (err) console.log(err);
      res.send(response);
    });
  });
});

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
