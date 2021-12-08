import gql from "graphql-tag";

export const GET_ALL_RESTAURANTS = gql`
  query {
    getAllRestaurants {
      id
      name
      location
      description
      restaurantImage
      address
      email
      phoneNo
      timings
      isDelivery
      isPickup
    }
  }
`;

export const GET_DISH_TYPES = gql`
  query {
    getDishTypes {
      id
      categoryType
    }
  }
`;

export const GET_RESTAURANT_DETAILS_BY_ID = gql`
  query {
    getRestaurantDetailsById(restaurantId: $restaurantId) {
      id
      name
      location
      description
      restaurantImage
      address
      email
      phoneNo
      timings
      isDelivery
      isPickup
    }
  }
`;

export const GET_USER_DETAILS_BY_ID = gql`
  query {
    getUserDetailsById(userId: $userId) {
      id
      firstName
      middleName
      lastName
      email
      phoneNo
      displayPicture
      dob
      city
      state
      country
      nickname
    }
  }
`;

export const GET_DISHES_BY_RESTAURANT_ID = gql`
  query {
    getDishesByRestaurantId(restaurantId: $restaurantId) {
      id
      restaurantId
      name
      mainIngredients
      price
      description
      dishImage
      dishCategoryId
    }
  }
`;

export const GET_ADDRESSES_BY_USER_ID = gql`
  query {
    getAddressesByUserId(userId: $userId) {
      id
      userId
      address1
      address2
      landmark
      city
      state
    }
  }
`;

export const GET_FAVOURITES_BY_USER_ID = gql`
  query {
    getFavouritesByUserId(userId: $userId) {
      id
      userId
      restaurantId
      name
      location
      restaurantImage
    }
  }
`;

export const GET_ORDERS_BY_RESTAURANT_ID = gql`
  query {
    getOrdersByRestaurantId(restaurantId: $restaurantId) {
      id
      userId
      address
      restaurantId
      firstName
      lastName
      restaurantName
      restaurantLocation
      orderCount
      createdAt
      specialInstruction
      orderStatus
      deliveryType
      taxes
      total
      contents {
        dishName
        dishPrice
        qty
      }
    }
  }
`;

export const GET_ORDERS_BY_USER_ID = gql`
  query {
    getOrdersByUserId(userId: $userId) {
      id
      userId
      address
      restaurantId
      firstName
      lastName
      restaurantName
      restaurantLocation
      orderCount
      createdAt
      specialInstruction
      orderStatus
      deliveryType
      taxes
      total
      contents {
        dishName
        dishPrice
        qty
      }
    }
  }
`;

export const GET_ORDER_DETAILS_BY_ID = gql`
  query {
    getOrderDetailsById(orderId: $orderId) {
      id
      userId
      address
      restaurantId
      firstName
      lastName
      restaurantName
      restaurantLocation
      orderCount
      createdAt
      specialInstruction
      orderStatus
      deliveryType
      taxes
      total
      contents {
        dishName
        dishPrice
        qty
      }
    }
  }
`;
