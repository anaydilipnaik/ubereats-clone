const express = require("express");
var session = require("express-session");
const router = express.Router();
var kafka = require("../kafka/client");

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

const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const { auth } = require("../passport");
// const { authRestaurant } = require("../passport-restaurant");
const { checkAuth } = require("../passport");
const { checkAuthRestaurant } = require("../passport-restaurant");
auth();
// authRestaurant();

router.get("/dishes/category", checkAuthRestaurant, async (req, res, next) => {
  kafka.make_request("get_dish_types", null, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    }
  });
});

router.get(
  "/restaurant/details/:id",
  // checkAuth,
  async (req, res, next) => {
    kafka.make_request(
      "get_restaurant_details_by_id",
      req.params.id,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.get(
  "/user/details/:id",
  // checkAuth,
  async (req, res, next) => {
    kafka.make_request(
      "get_user_details_by_id",
      req.params.id,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.get(
  "/dishes/get/:restaurantid",
  // checkAuth,
  async (req, res, next) => {
    kafka.make_request(
      "get_dishes_by_restaurant_id",
      req.params.restaurantid,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.get("/addresses/get/:userid", checkAuth, async (req, res, next) => {
  kafka.make_request(
    "get_addresses_by_user_id",
    req.params.userid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

router.get("/favourites/:userid", checkAuth, async (req, res, next) => {
  kafka.make_request(
    "get_favourites_by_user_id",
    req.params.userid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

router.get(
  "/orders/get/restaurant/:restaurantid",
  checkAuth,
  async (req, res, next) => {
    kafka.make_request(
      "get_orders_by_restaurant_id",
      req.params.restaurantid,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.post(
  "/filteredorders/get/restaurant",
  checkAuthRestaurant,
  async (req, res, next) => {
    kafka.make_request(
      "get_filtered_orders_by_restaurant_id",
      req.body,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.post("/filteredorders/get/user", checkAuth, async (req, res, next) => {
  kafka.make_request(
    "get_filtered_orders_by_user_id",
    req.body,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

router.get("/orders/get/user/:userid", checkAuth, async (req, res, next) => {
  kafka.make_request(
    "get_orders_by_user_id",
    req.params.userid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

router.get("/order/details/:id", checkAuth, async (req, res, next) => {
  kafka.make_request(
    "get_order_details_by_id",
    req.params.id,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

router.post("/registerUser", async (req, res, next) => {
  kafka.make_request("register_user", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    }
  });
});

router.post("/registerRestaurant", async (req, res, next) => {
  kafka.make_request("register_restaurant", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    }
  });
});

router.post("/addUserAddress", checkAuth, async (req, res, next) => {
  kafka.make_request("add_user_address", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    }
  });
});

router.post("/addToFavourites", checkAuth, async (req, res, next) => {
  kafka.make_request("add_to_favourites", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    }
  });
});

router.post("/addDish", checkAuthRestaurant, async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.dishImage = req.file.location;
      kafka.make_request("add_dish", req.body, function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
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

router.post("/loginUser", async (req, res, next) => {
  kafka.make_request("login_user", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    }
    if (results) {
      const payload = { _id: results._id, email: results.email };
      const token = jwt.sign(payload, secret, {
        expiresIn: 1008000,
      });
      results.token = "JWT " + token;
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    } else {
      res.writeHead(401, {
        "Content-Type": "text/plain",
      });
      res.end("Invalid Credentials");
    }
  });
});

router.post("/loginRestaurant", async (req, res, next) => {
  kafka.make_request("login_restaurant", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    }
    if (results) {
      const payload = { _id: results._id, email: results.email };
      const token = jwt.sign(payload, secret, {
        expiresIn: 1008000,
      });
      results.token = "JWT " + token;
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(results));
    } else {
      res.writeHead(401, {
        "Content-Type": "text/plain",
      });
      res.end("Invalid Credentials");
    }
  });
});

router.put(
  "/updateOrderDeliveryStatus/:orderid",
  // checkAuthRestaurant,
  async (req, res, next) => {
    req.body.orderId = req.params.orderid;
    kafka.make_request(
      "update_order_delivery_status",
      req.body,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

router.put("/updateUser/:userid", checkAuth, async (req, res, next) => {
  try {
    uploadSingleFile(req, res, async (error) => {
      if (req.file) req.body.displayPicture = req.file.location;
      req.body.userId = req.params.userid;
      kafka.make_request("update_user", req.body, function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
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

router.put(
  "/updateRestaurant/:restaurantid",
  checkAuthRestaurant,
  async (req, res, next) => {
    try {
      uploadSingleFile(req, res, async (error) => {
        if (req.file) req.body.restaurantImage = req.file.location;
        req.body.restaurantId = req.params.restaurantid;
        kafka.make_request(
          "update_restaurant",
          req.body,
          function (err, results) {
            if (err) {
              res.writeHead(500, {
                "Content-Type": "text/plain",
              });
              res.end("Error Occured");
            } else {
              res.writeHead(200, {
                "Content-Type": "application/json",
              });
              res.end(JSON.stringify(results));
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
  }
);

router.put(
  "/updateDish/:dishid",
  checkAuthRestaurant,
  async (req, res, next) => {
    try {
      uploadSingleFile(req, res, async (error) => {
        if (req.file) req.body.dishImage = req.file.location;
        req.body.dishId = req.params.dishid;
        kafka.make_request("update_dish", req.body, function (err, results) {
          if (err) {
            res.writeHead(500, {
              "Content-Type": "text/plain",
            });
            res.end("Error Occured");
          } else {
            res.writeHead(200, {
              "Content-Type": "application/json",
            });
            res.end(JSON.stringify(results));
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
  }
);

// partially complete
router.post(
  "/restaurants/all",
  // checkAuth,
  async (req, res, next) => {
    kafka.make_request(
      "get_all_restaurants",
      req.body,
      function (err, results) {
        if (err) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("Error Occured");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(results));
        }
      }
    );
  }
);

// // not complete
// router.post("/placeOrder", checkAuth, async (req, res, next) => {
//   try {
//     let orderContentsArr = req.body.contents;
//     delete req.body.contents;
//     let results = await apiModel.placeOrder(req.body, orderContentsArr);
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end(JSON.stringify(results));
//   } catch (e) {
//     console.log(e);
//     res.writeHead(500, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Error");
//   }
// });

module.exports = router;
