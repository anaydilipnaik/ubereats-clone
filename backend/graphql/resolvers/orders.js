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
  Mutation: {
    async placeOrder(_, { orderInput }) {
      let newOrder = new Order({
        userId: orderInput.userId,
        address: orderInput.address,
        restaurantId: orderInput.restaurantId,
        firstName: orderInput.firstName,
        lastName: orderInput.lastName,
        restaurantName: orderInput.restaurantName,
        orderCount: orderInput.orderCount,
        createdAt: orderInput.createdAt,
        restaurantLocation: orderInput.restaurantLocation,
        specialInstruction: orderInput.specialInstruction,
        orderStatus: orderInput.orderStatus,
        deliveryType: orderInput.deliveryType,
        taxes: orderInput.taxes,
        total: orderInput.total,
        contents: orderInput.contents,
      });
      const order = await newOrder.save();
      if (order) {
        return order;
      } else {
        throw new Error("Error");
      }
    },
    async getFilteredOrdersByRestaurantId(_, { restaurantId, orderStatus }) {
      const order = await Order.find({
        restaurantId: restaurantId,
        orderStatus: orderStatus,
      });
      if (order) {
        return order;
      } else {
        throw new Error("Error");
      }
    },
    async getFilteredOrdersByUserId(_, { userId, orderStatus }) {
      const order = await Order.find({
        userId: userId,
        orderStatus: orderStatus,
      });
      if (order) {
        return order;
      } else {
        throw new Error("Error");
      }
    },
    async updateOrderDeliveryStatus(_, { orderId, orderStatus }) {
      const order = Order.findOneAndUpdate(
        { _id: orderId },
        { orderStatus: orderStatus },
        { new: true }
      );
      if (order) {
        return order;
      } else {
        throw new Error("Error");
      }
    },
  },
};
