const { gql } = require("apollo-server");

module.exports = gql`
  type DishType {
    id: ID!
    categoryType: String!
  }
  type Restaurant {
    id: ID!
    name: String
    location: String
    description: String
    restaurantImage: String
    address: String
    email: String
    phoneNo: String
    timings: String
    isDelivery: String
    isPickup: String
  }
  type User {
    id: ID!
    firstName: String
    middleName: String
    lastName: String
    email: String
    phoneNo: String
    displayPicture: String
    dob: String
    city: String
    state: String
    country: String
    nickname: String
  }
  type Address {
    id: ID!
    userId: String
    address1: String
    address2: String
    landmark: String
    city: String
    state: String
  }
  type Dish {
    id: ID!
    restaurantId: String
    name: String
    mainIngredients: String
    price: String
    description: String
    dishImage: String
    dishCategoryId: String
  }
  type Favourites {
    id: ID!
    userId: String
    restaurantId: String
    name: String
    location: String
    restaurantImage: String
  }
  type Order {
    id: ID!
    userId: String
    address: String
    restaurantId: String
    firstName: String
    lastName: String
    restaurantName: String
    restaurantLocation: String
    orderCount: String
    createdAt: String
    specialInstruction: String
    orderStatus: String
    deliveryType: String
    taxes: String
    total: String
    contents: [OrderContents]
  }
  type OrderContents {
    dishName: String
    dishPrice: String
    qty: String
  }
  type Query {
    getDishTypes: [DishType]
    getRestaurantDetailsById(restaurantId: ID!): Restaurant
    getAllRestaurants: [Restaurant]
    getUserDetailsById(userId: ID!): User
    getDishesByRestaurantId(restaurantId: String): [Dish]
    getAddressesByUserId(userId: String): [Address]
    getFavouritesByUserId(userId: String): [Favourites]
    getOrdersByRestaurantId(restaurantId: String): [Order]
    getOrdersByUserId(userId: String): [Order]
    getOrderDetailsById(orderId: ID!): Order
  }
  # type Mutation {
  #   registerUser:
  #   registerRestaurant:
  #   addUserAddress:
  #   addToFavourites:
  #   addDish:
  #   loginUser:
  #   loginRestaurant:
  #   updateOrderDeliveryStatus:
  #   updateUser:
  #   updateRestaurant:
  #   updateDish:
  #   getFilteredOrdersByRestaurantId:
  #   getFilteredOrdersByUserId:
  #   placeOrder:
  # }
`;
