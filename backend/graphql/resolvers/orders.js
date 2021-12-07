const { AuthenticationError, UserInputError } = require("apollo-server");

const Order = require("../../models/OrdersModel");

module.exports = {
  Query: {
    async getOrdersByRestaurantId(_, { restaurantId }) {
      try {
        const order = await Order.find({ restaurantId: restaurantId });
        if (order) {
          return order;
        } else {
          throw new Error("Orders not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getOrdersByUserId(_, { userId }) {
      try {
        const order = await Order.find({ userId: userId });
        if (order) {
          return order;
        } else {
          throw new Error("Orders not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getOrderDetailsById(_, { orderId }) {
      try {
        const order = await Order.findById(orderId);
        if (order) {
          return order;
        } else {
          throw new Error("Order not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
