const dishResolvers = require("./dishes");
const restaurantResolvers = require("./restaurants");
const userResolvers = require("./users");
const orderResolvers = require("./orders");

module.exports = {
  Query: {
    ...dishResolvers.Query,
    ...restaurantResolvers.Query,
    ...userResolvers.Query,
    ...orderResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...restaurantResolvers.Mutation,
    ...dishResolvers.Mutation,
    ...orderResolvers.Mutation,
  },
};
