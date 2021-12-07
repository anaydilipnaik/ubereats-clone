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
  input RegisterUserInput {
    firstName: String
    middleName: String
    lastName: String
    email: String
    city: String
    password: String
  }
  input RegisterRestaurantInput {
    name: String
    location: String
    email: String
    password: String
  }
  input AddressInput {
    userId: String
    address1: String
    address2: String
    landmark: String
    city: String
    state: String
  }
  input FavouritesInput {
    userId: String
    restaurantId: String
    name: String
    location: String
    restaurantImage: String
  }
  input DishInput {
    restaurantId: String
    name: String
    mainIngredients: String
    price: String
    description: String
    dishImage: String
    dishCategoryId: String
  }
  input OrderContentsInput {
    dishName: String
    dishPrice: String
    qty: String
  }
  input OrderInput {
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
    contents: [OrderContentsInput]
  }
  input UpdateUserInput {
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
  input UpdateRestaurantInput {
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
  input UpdateDishInput {
    id: ID!
    restaurantId: String
    name: String
    mainIngredients: String
    price: String
    description: String
    dishImage: String
    dishCategoryId: String
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
  type Mutation {
    registerUser(registerInput: RegisterUserInput): User!
    registerRestaurant(registerInput: RegisterRestaurantInput): Restaurant!
    addUserAddress(addressInput: AddressInput): Address!
    addToFavourites(favouritesInput: FavouritesInput): Favourites!
    addDish(dishInput: DishInput): Dish!
    placeOrder(orderInput: OrderInput): Order!
    loginUser(email: String!, password: String!): User!
    loginRestaurant(email: String!, password: String!): Restaurant!
    getFilteredOrdersByRestaurantId(
      restaurantId: String!
      orderStatus: String!
    ): [Order]
    getFilteredOrdersByUserId(userId: String!, orderStatus: String!): [Order]
    updateOrderDeliveryStatus(orderId: String!, orderStatus: String!): Order!
    updateUser(userInput: UpdateUserInput): User!
    updateRestaurant(restaurantInput: UpdateRestaurantInput): Restaurant!
    updateDish(dishInput: UpdateDishInput): Dish!
  }
`;
