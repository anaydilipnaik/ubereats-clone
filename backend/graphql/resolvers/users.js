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
  Mutation: {
    async registerUser(_, { registerInput }) {
      let newUser = new User({
        firstName: registerInput.firstName,
        middleName: registerInput.middleName,
        lastName: registerInput.lastName,
        email: registerInput.email,
        city: registerInput.city,
        password: registerInput.password,
      });
      const user = await newUser.save();
      if (user) {
        return user;
      } else {
        throw new Error("Error");
      }
    },
    async addUserAddress(_, { addressInput }) {
      let newAddress = new Address({
        address1: addressInput.address1,
        address2: addressInput.address2,
        userId: addressInput.userId,
        landmark: addressInput.landmark,
        city: addressInput.city,
        state: addressInput.state,
      });
      const address = await newAddress.save();
      if (address) {
        return address;
      } else {
        throw new Error("Error");
      }
    },
    async addToFavourites(_, { favouritesInput }) {
      let newFavourite = new Favourite({
        userId: favouritesInput.userId,
        restaurantId: favouritesInput.restaurantId,
        name: favouritesInput.name,
        location: favouritesInput.location,
        restaurantImage: favouritesInput.restaurantImage,
      });
      const favourite = await newFavourite.save();
      if (favourite) {
        return favourite;
      } else {
        throw new Error("Error");
      }
    },
    async loginUser(_, { email, password }) {
      const user = await User.findOne({ email: email, password: password });
      if (user) {
        return user;
      } else {
        throw new Error("Login Failed");
      }
    },
  },
};
