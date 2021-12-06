var connection = new require("./kafka/Connection");
//topics files
var DishTypes = require("./services/dishTypes.js");
var Dishes = require("./services/dishes.js");
var DishAdd = require("./services/dishAdd.js");
var DishUpdate = require("./services/dishUpdate.js");
var Restaurants = require("./services/restaurants.js");
var RestaurantsAll = require("./services/restaurantsAll.js");
var Users = require("./services/users.js");
var UserLogin = require("./services/userLogin.js");
var UserUpdate = require("./services/userUpdate.js");
var RestaurantUpdate = require("./services/restaurantUpdate.js");
var RestaurantLogin = require("./services/restaurantLogin.js");
var UserRegister = require("./services/userRegister.js");
var RestaurantRegister = require("./services/restaurantRegister.js");
var UserLocations = require("./services/userLocations.js");
var UserLocationAdd = require("./services/userLocationAdd.js");
var UserFavourites = require("./services/userFavourites.js");
var UserFavouriteAdd = require("./services/userFavouriteAdd.js");
var OrdersRestaurant = require("./services/ordersRestaurant.js");
var FilteredOrdersRestaurant = require("./services/filteredOrdersRestaurant.js");
var FilteredOrdersUser = require("./services/filteredOrdersUser.js");
var OrdersUser = require("./services/ordersUser.js");
var OrderContents = require("./services/orderContents.js");
var OrderDeliveryStatusUpdate = require("./services/orderDeliveryStatusUpdate.js");
var OrderPlace = require("./services/orderPlace.js");
var OrderPlaceContents = require("./services/orderPlaceContents.js");

const { mongoDB } = require("./config");
const mongoose = require("mongoose");

mongoose.connect(
  mongoDB,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) {
      console.log(err);
      console.log(`MongoDB Connection Failed`);
    } else {
      console.log(`MongoDB Connected`);
    }
  }
);

function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function (message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function (err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res,
          }),
          partition: 0,
        },
      ];
      producer.send(payloads, function (err, data) {
        console.log(data);
      });
      return;
    });
  });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("get_dish_types", DishTypes);
handleTopicRequest("get_restaurant_details_by_id", Restaurants);
handleTopicRequest("get_user_details_by_id", Users);
handleTopicRequest("get_dishes_by_restaurant_id", Dishes);
handleTopicRequest("get_addresses_by_user_id", UserLocations);
handleTopicRequest("get_favourites_by_user_id", UserFavourites);
handleTopicRequest("get_orders_by_restaurant_id", OrdersRestaurant);
handleTopicRequest(
  "get_filtered_orders_by_restaurant_id",
  FilteredOrdersRestaurant
);
handleTopicRequest("get_filtered_orders_by_user_id", FilteredOrdersUser);
handleTopicRequest("get_orders_by_user_id", OrdersUser);
handleTopicRequest("get_order_details_by_id", OrderContents);
handleTopicRequest("register_user", UserRegister);
handleTopicRequest("register_restaurant", RestaurantRegister);
handleTopicRequest("add_user_address", UserLocationAdd);
handleTopicRequest("add_to_favourites", UserFavouriteAdd);
handleTopicRequest("add_dish", DishAdd);
handleTopicRequest("login_user", UserLogin);
handleTopicRequest("login_restaurant", RestaurantLogin);
handleTopicRequest("update_user", UserUpdate);
handleTopicRequest("update_restaurant", RestaurantUpdate);
handleTopicRequest("update_order_delivery_status", OrderDeliveryStatusUpdate);
handleTopicRequest("update_dish", DishUpdate);
handleTopicRequest("get_all_restaurants", RestaurantsAll);
handleTopicRequest("place_order", OrderPlace);
handleTopicRequest("place_order_contents", OrderPlaceContents);
