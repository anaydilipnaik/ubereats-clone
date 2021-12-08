import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation registerUser(
    $firstName: String
    $middleName: String
    $lastName: String
    $email: String
    $city: String
    $password: String
  ) {
    registerUser(
      registerInput: {
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        email: $email
        city: $city
        password: $password
      }
    ) {
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

export const REGISTER_RESTAURANT = gql`
  mutation registerRestaurant(
    $name: String
    $location: String
    $email: String
    $password: String
  ) {
    registerRestaurant(
      registerInput: {
        name: $name
        location: $location
        email: $email
        password: $password
      }
    ) {
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

export const ADD_USER_ADDRESS = gql`
  mutation addUserAddress(
    $userId: String
    $address1: String
    $address2: String
    $landmark: String
    $city: String
    $state: String
  ) {
    addUserAddress(
      addressInput: {
        userId: $userId
        address1: $address1
        address2: $address2
        landmark: $landmark
        city: $city
        state: $state
      }
    ) {
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

export const ADD_TO_FAVOURITES = gql`
  mutation addToFavourites(
    $userId: String
    $restaurantId: String
    $name: String
    $location: String
    $restaurantImage: String
  ) {
    addToFavourites(
      favouritesInput: {
        userId: $userId
        restaurantId: $restaurantId
        name: $name
        location: $location
        restaurantImage: $restaurantImage
      }
    ) {
      id
      userId
      restaurantId
      name
      location
      restaurantImage
    }
  }
`;

export const ADD_DISH = gql`
  mutation addDish(
    $restaurantId: String
    $name: String
    $mainIngredients: String
    $price: String
    $description: String
    $dishImage: String
    $dishCategoryId: String
  ) {
    addDish(
      dishInput: {
        restaurantId: $restaurantId
        name: $name
        mainIngredients: $mainIngredients
        price: $price
        description: $description
        dishImage: $dishImage
        dishCategoryId: $dishCategoryId
      }
    ) {
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

export const PLACE_ORDER = gql`
  mutation placeOrder(
    $userId: String
    $address: String
    $restaurantId: String
    $firstName: String
    $lastName: String
    $restaurantName: String
    $restaurantLocation: String
    $orderCount: String
    $createdAt: String
    $specialInstruction: String
    $orderStatus: String
    $deliveryType: String
    $taxes: String
    $total: String
  ) {
    placeOrder(
      orderInput: {
        userId: $userId
        address: $address
        restaurantId: $restaurantId
        firstName: $firstName
        lastName: $lastName
        restaurantName: $restaurantName
        restaurantLocation: $restaurantLocation
        orderCount: $orderCount
        createdAt: $createdAt
        specialInstruction: $specialInstruction
        orderStatus: $orderStatus
        deliveryType: $deliveryType
        taxes: $taxes
        total: $total
      }
    ) {
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

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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

export const LOGIN_RESTAURANT = gql`
  mutation loginRestaurant($email: String!, $password: String!) {
    loginRestaurant(email: $email, password: $password) {
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

export const GET_FILTERED_ORDERS_BY_RESTAURANT_ID = gql`
  mutation getFilteredOrdersByRestaurantId(
    $restaurantId: String!
    $orderStatus: String!
  ) {
    getFilteredOrdersByRestaurantId(
      restaurantId: $restaurantId
      orderStatus: $orderStatus
    ) {
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

export const GET_FILTERED_ORDERS_BY_USER_ID = gql`
  mutation getFilteredOrdersByUserId(
    $userId: String!
    $orderStatus: String!
  ) {
    getFilteredOrdersByUserId(
        userId: $userId
        orderStatus: $orderStatus
    ) {
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
  }
`;

export const UPDATE_ORDER_DELIVERY_STATUS = gql`
  mutation updateOrderDeliveryStatus($orderId: String!, $orderStatus: String!) {
    updateOrderDeliveryStatus(orderId: $orderId, orderStatus: $orderStatus) {
      id
      orderStatus
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $middleName: String
    $lastName: String
    $email: String
    $phoneNo: String
    $displayPicture: String
    $dob: String
    $city: String
    $state: String
    $country: String
    $nickname: String
  ) {
    updateUser(
      userInput: {
        id: $id
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        email: $email
        phoneNo: $phoneNo
        displayPicture: $displayPicture
        dob: $dob
        city: $city
        state: $state
        country: $country
        nickname: $nickname
      }
    ) {
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

export const UPDATE_RESTAURANT = gql`
  mutation updateRestaurant(
    $id: ID!
    $name: String
    $location: String
    $description: String
    $restaurantImage: String
    $address: String
    $email: String
    $phoneNo: String
    $timings: String
    $isDelivery: String
    $isPickup: String
  ) {
    updateRestaurant(
      restaurantInput: {
        id: $id
        name: $name
        location: $location
        description: $description
        restaurantImage: $restaurantImage
        address: $address
        email: $email
        phoneNo: $phoneNo
        timings: $timings
        isDelivery: $isDelivery
        isPickup: $isPickup
      }
    ) {
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

export const UPDATE_DISH = gql`
  mutation updateDish(
    $id: ID!
    $restaurantId: String
    $name: String
    $mainIngredients: String
    $price: String
    $description: String
    $dishImage: String
    $dishCategoryId: String
  ) {
    updateDish(
      dishInput: {
        id: $id
        restaurantId: $restaurantId
        name: $name
        mainIngredients: $mainIngredients
        price: $price
        description: $description
        dishImage: $dishImage
        dishCategoryId: $dishCategoryId
      }
    ) {
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
