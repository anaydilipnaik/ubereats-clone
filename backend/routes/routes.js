const express = require("express");
var session = require("express-session");
const router = express.Router();

const apiModel = require("../models/model");
let { uploadSingleFile } = require("../fileUploads");

var app = express();

//use express session to maintain session data
app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000,
  })
);

router.get("/restaurants/all", async (req, res, next) => {
  try {
    let results = await apiModel.getAllRestaurants();
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/restaurant/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getRestaurantDetailsById(req.params.id);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/orders/get/restaurant/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.getOrdersByRestaurantId(
      req.params.restaurantid
    );
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/user/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getUserDetails(req.params.id);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/dishes/get/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.getDishesByRestaurantId(
      req.params.restaurantid
    );
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/cart/get/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserCart(req.params.userid);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/addresses/get/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserAddresses(req.params.userid);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/orders/get/user/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getOrdersByUserId(req.params.userid);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/order/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getOrderDetailsById(req.params.id);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/favourites/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserFavourites(req.params.userid);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.get("/cart/count/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getCartCount(req.params.userid);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(results));
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/registerUser", async (req, res, next) => {
  try {
    await apiModel.registerUser(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/registerRestaurant", async (req, res, next) => {
  try {
    await apiModel.registerRestaurant(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/placeOrder", async (req, res, next) => {
  try {
    await apiModel.placeOrder(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/addUserAddress", async (req, res, next) => {
  try {
    await apiModel.addAddress(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/addToFavourites", async (req, res, next) => {
  try {
    await apiModel.addToFavourites(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/addDish", async (req, res, next) => {
  try {
    await apiModel.addDish(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/addToCart", async (req, res, next) => {
  try {
    await apiModel.addToCart(req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/loginUser", async (req, res, next) => {
  try {
    const results = await apiModel.loginUser(req.body);
    if (results.length > 0) {
      res.cookie("cookie", "user", {
        maxAge: 900000,
        httpOnly: false,
        path: "/",
      });
      res.json(JSON.parse(JSON.stringify(results)));
    } else {
      // Auth Error
      res.writeHead(401, {
        "Content-Type": "text/plain",
      });
      res.end("Error");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/loginRestaurant", async (req, res, next) => {
  try {
    const results = await apiModel.loginRestaurant(req.body);
    if (results.length > 0) {
      res.cookie("cookie", "user", {
        maxAge: 900000,
        httpOnly: false,
        path: "/",
      });
      res.json(JSON.parse(JSON.stringify(results)));
    } else {
      // Auth Error
      res.writeHead(401, {
        "Content-Type": "text/plain",
      });
      res.end("Error");
    }
  } catch (e) {
    console.log(e);
  }
});

router.put("/updateUser/:userid", async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.display_picture = req.file.location;
      await apiModel.updateUserDetails(req.params.userid, req.body);
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("Success");
    });
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.put("/updateRestaurant/:restaurantid", async (req, res, next) => {
  try {
    await apiModel.updateRestaurantDetails(req.params.restaurantid, req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.put("/updateOrderDeliveryStatus/:orderid", async (req, res, next) => {
  try {
    await apiModel.updateOrderDeliveryStatus(req.params.orderid, req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.put("/updateDish/:dishid", async (req, res, next) => {
  try {
    await apiModel.updateDish(req.params.dishid, req.body);
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Success");
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

module.exports = router;
