const express = require("express");
var session = require("express-session");
const router = express.Router();

// const apiModel = require("../models/sql_model");
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

// mongo model instance
const Dishes = require("../models/DishesModel");
const DishTypes = require("../models/DishTypesModel");
const OrderContents = require("../models/OrderContentsModel");
const Orders = require("../models/OrdersModel");
const Restaurants = require("../models/RestaurantsModel");
const UserCartItems = require("../models/UserCartItemsModel");
const UserFavourites = require("../models/UserFavouritesModel");
const UserLocations = require("../models/UserLocationsModel");
const Users = require("../models/UsersModel");

const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const { checkAuth } = require("../passport");
const { auth } = require("../passport");
auth();

router.get("/dishes/category", checkAuth, async (req, res, next) => {
  DishTypes.find({}, (error, result) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      console.log(result);
      res.end(JSON.stringify(result));
    }
  });
});

router.post("/restaurants/all", async (req, res, next) => {
  Restaurants.find({}, (error, result) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(result));
    }
  });
});

router.get("/restaurant/details/:id", async (req, res, next) => {
  Restaurants.findOne({ _id: req.params.id }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/orders/get/restaurant/:restaurantid", async (req, res, next) => {
  Orders.findOne({ restaurantId: req.params.restaurantid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/user/details/:id", async (req, res, next) => {
  Users.findOne({ _id: req.params.id }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/dishes/get/:restaurantid", async (req, res, next) => {
  Dishes.findOne({ restaurantId: req.params.restaurantid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/cart/get/:userid", async (req, res, next) => {
  UserCartItems.findOne({ userId: req.params.userid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/addresses/get/:userid", async (req, res, next) => {
  UserLocations.findOne({ userId: req.params.userid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/orders/get/user/:userid", async (req, res, next) => {
  Orders.findOne({ userId: req.params.userid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/order/details/:id", async (req, res, next) => {
  Orders.findOne({ _id: req.params.id }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.get("/favourites/:userid", async (req, res, next) => {
  UserFavourites.findOne({ userId: req.params.userid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/registerUser", async (req, res, next) => {
  let newUser = new Users({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    password: req.body.password,
  });
  newUser.save((error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/registerRestaurant", async (req, res, next) => {
  let newRestaurant = new Restaurants({
    name: req.body.name,
    location: req.body.location,
    email: req.body.email,
    password: req.body.password,
  });
  newRestaurant.save((error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/addUserAddress", async (req, res, next) => {
  let newAddress = new UserLocations({
    address1: req.body.address1,
    address2: address2,
    userId: req.body.userId,
    landmark: req.body.landmark,
    city: req.body.city,
    state: req.body.state,
  });
  newAddress.save((error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/addToFavourites", async (req, res, next) => {
  let newFavourite = new UserFavourites({
    userId: req.body.userId,
    restaurantId: req.body.restaurantId,
  });
  newFavourite.save((error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/addDish", async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.dish_image = req.file.location;
      let newDish = new Dishes({
        restaurantId: req.body.restaurantId,
        name: req.body.name,
        mainIngredients: req.body.mainIngredients,
        price: req.body.price,
        description: req.body.description,
        dishImage: req.body.dishImage,
        dishCategoryId: req.body.dishCategoryId,
      });
      newDish.save((error, doc) => {
        if (error) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end();
        } else {
          res.writeHead(200, {
            "Content-Type": "text/plain",
          });
          res.end(JSON.stringify(doc));
        }
      });
    });
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.post("/addToCart", async (req, res, next) => {
  let newUserCartItem = new UserCartItems({
    restaurantId: req.body.restaurantId,
    dishId: req.body.dishId,
    userId: req.body.userId,
    cartStatus: req.body.cartStatus,
    deliveryType: req.body.deliveryType,
    dishPrice: req.body.dishPrice,
    qty: req.body.qty,
  });
  newUserCartItem.save((error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end();
    } else {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

router.post("/loginUser", async (req, res, next) => {
  Users.findOne(
    { email: req.body.email, password: req.body.password },
    (error, user) => {
      if (error) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      }
      if (user) {
        const payload = { _id: user._id, username: user.username };
        const token = jwt.sign(payload, secret, {
          expiresIn: 1008000,
        });
        res.status(200).end("JWT " + token);
      } else {
        res.writeHead(401, {
          "Content-Type": "text/plain",
        });
        res.end("Invalid Credentials");
      }
    }
  );
});

router.post("/loginRestaurant", async (req, res, next) => {
  Restaurants.findOne(
    { email: req.body.email, password: req.body.password },
    (error, user) => {
      if (error) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      }
      if (user) {
        const payload = { _id: user._id, username: user.username };
        const token = jwt.sign(payload, secret, {
          expiresIn: 1008000,
        });
        res.status(200).end("JWT " + token);
      } else {
        res.writeHead(401, {
          "Content-Type": "text/plain",
        });
        res.end("Invalid Credentials");
      }
    }
  );
});

router.put("/updateUser/:userid", async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.displayPicture = req.file.location;
      Users.findOneAndUpdate(
        { _id: req.params.userid },
        {
          firstName: req.body.firstName,
          middleName: req.body.middleName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNo: req.body.phoneNo,
          displayPicture: req.body.displayPicture,
          dob: req.body.dob,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country,
          nickname: req.body.nickname,
          password: req.body.password,
        },
        { new: true },
        (err, doc) => {
          if (!err) {
            res.writeHead(200, {
              "Content-Type": "text/plain",
            });
            res.end(JSON.stringify(doc));
          } else {
            console.log(err);
            res.writeHead(500, {
              "Content-Type": "text/plain",
            });
            res.end("Error");
          }
        }
      );
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
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.restaurantImage = req.file.location;
      Restaurants.findOneAndUpdate(
        { _id: req.params.userid },
        {
          name: req.body.name,
          location: req.body.location,
          discription: req.body.discription,
          restaurantImage: req.body.restaurantImage,
          address: req.body.address,
          email: req.body.email,
          phoneNo: req.body.phoneNo,
          timings: req.body.timings,
          isDelivery: req.body.isDelivery,
          isPickup: req.body.isPickup,
          password: req.body.password,
        },
        { new: true },
        (err, doc) => {
          if (!err) {
            res.writeHead(200, {
              "Content-Type": "text/plain",
            });
            res.end(JSON.stringify(doc));
          } else {
            console.log(err);
            res.writeHead(500, {
              "Content-Type": "text/plain",
            });
            res.end("Error");
          }
        }
      );
    });
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.put("/updateOrderDeliveryStatus/:orderid", async (req, res, next) => {
  Orders.findOneAndUpdate(
    { _id: req.params.orderid },
    { orderStatus: req.body.orderStatus },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(JSON.stringify(doc));
      } else {
        console.log(err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error");
      }
    }
  );
});

router.put("/updateDish/:dishid", async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.dishImage = req.file.location;
      Dishes.findOneAndUpdate(
        { _id: req.params.dishid },
        {
          restaurantId: req.body.restaurantId,
          name: req.body.name,
          mainIngredients: req.body.mainIngredients,
          price: req.body.price,
          description: req.body.description,
          dishImage: req.body.dishImage,
          dishCategoryId: req.body.dishCategoryId,
        },
        { new: true },
        (err, doc) => {
          if (!err) {
            res.writeHead(200, {
              "Content-Type": "text/plain",
            });
            res.end(JSON.stringify(doc));
          } else {
            console.log(err);
            res.writeHead(500, {
              "Content-Type": "text/plain",
            });
            res.end("Error");
          }
        }
      );
    });
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error");
  }
});

router.put("/updateCart/:cartid", async (req, res, next) => {
  UserCartItems.findOneAndUpdate(
    { id: req.params.cartid },
    { qty: req.body.qty },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(JSON.stringify(doc));
      } else {
        console.log(err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error");
      }
    }
  );
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

router.post("/placeOrder", async (req, res, next) => {
  try {
    let orderContentsArr = req.body.contents;
    delete req.body.contents;
    let results = await apiModel.placeOrder(req.body, orderContentsArr);
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

module.exports = router;
