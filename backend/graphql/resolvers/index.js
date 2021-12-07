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
  // Mutation: {
  // ...usersResolvers.Mutation,
  // ...postsResolvers.Mutation,
  // ...commentsResolvers.Mutation
  // },
};
