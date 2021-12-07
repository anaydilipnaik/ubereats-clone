const { AuthenticationError, UserInputError } = require("apollo-server");

const User = require("../../models/UsersModel");
const Address = require("../../models/UserLocationsModel");
const Favourite = require("../../models/UserFavouritesModel");

module.exports = {
  Query: {
    async getUserDetailsById(_, { userId }) {
      try {
        const user = await User.findById(userId);
        if (user) {
          return user;
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAddressesByUserId(_, { userId }) {
      try {
        const addresses = await Address.find({ userId: userId });
        if (addresses) {
          return addresses;
        } else {
          throw new Error("Addresses not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getFavouritesByUserId(_, { userId }) {
      try {
        const favourites = await Favourite.find({ userId: userId });
        if (favourites) {
          return favourites;
        } else {
          throw new Error("Favourites not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
