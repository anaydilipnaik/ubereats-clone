const express = require("express");
const router = express.Router();

const apiModel = require("../models/model");

router.get("/countries", async (req, res, next) => {
  try {
    let results = await apiModel.getCountries();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/restaurants/all", async (req, res, next) => {
  try {
    let results = await apiModel.getAllRestaurants();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/restaurant/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getRestaurantDetailsById(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/orders/get/restaurant/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.getOrdersByRestaurantId(
      req.params.restaurantid
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/user/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getUserDetails(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/dishes/get/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.getDishesByRestaurantId(
      req.params.restaurantid
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/cart/get/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserCart(req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/addresses/get/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserAddresses(req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/orders/get/user/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getOrdersByUserId(req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/order/details/:id", async (req, res, next) => {
  try {
    let results = await apiModel.getOrderDetailsById(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/favourites/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getUserFavourites(req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/cart/count/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.getCartCount(req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/restaurant/images/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.getRestaurantImages(req.params.restaurantid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/dish/images/:dishid", async (req, res, next) => {
  try {
    let results = await apiModel.getDishImages(req.params.dishid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/registerUser", async (req, res, next) => {
  try {
    let results = await apiModel.registerUser(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/registerRestaurant", async (req, res, next) => {
  try {
    let results = await apiModel.registerRestaurant(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/placeOrder", async (req, res, next) => {
  try {
    let results = await apiModel.placeOrder(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/addUserAddress", async (req, res, next) => {
  try {
    let results = await apiModel.addAddress(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/addToFavourites", async (req, res, next) => {
  try {
    let results = await apiModel.addToFavourites(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/addDish", async (req, res, next) => {
  try {
    let results = await apiModel.addDish(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/addToCart", async (req, res, next) => {
  try {
    let results = await apiModel.addToCart(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/loginUser", async (req, res, next) => {
  try {
    let results = await apiModel.loginUser(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/loginRestaurant", async (req, res, next) => {
  try {
    let results = await apiModel.loginRestaurant(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/updateUser/:userid", async (req, res, next) => {
  try {
    let results = await apiModel.updateUserDetails(req.params.userid, req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/updateRestaurant/:restaurantid", async (req, res, next) => {
  try {
    let results = await apiModel.updateRestaurantDetails(
      req.params.restaurantid,
      req.body
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/updateOrderDeliveryStatus/:orderid", async (req, res, next) => {
  try {
    let results = await apiModel.updateOrderDeliveryStatus(
      req.params.orderid,
      req.body
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/updateDish/:dishid", async (req, res, next) => {
  try {
    let results = await apiModel.updateDish(req.params.dishid, req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
