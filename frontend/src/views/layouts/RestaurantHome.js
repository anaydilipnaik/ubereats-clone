import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import {
  getRestaurantDetailsById,
  getDishesByRestaurantId,
  getDishCategories,
  updateRestaurant,
} from "../../controllers/restaurants";
import DishCard from "../../components/cards/DishCard";
import EditDishModal from "../../components/modals/EditDishModal";

const RestaurantHome = ({ restaurant }) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [editDishModal, setEditDishModal] = useState(false);
  const [dishDetails, setDishDetails] = useState(null);
  const [dishCategories, setDishCategories] = useState(null);
  // restaurant details
  const [restaurantName, setRestaurantName] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [timings, setTimings] = useState(null);
  const [isDelivery, setIsDelivery] = useState(false);
  const [isPickUp, setIsPickup] = useState(false);
  const [restaurantImage, setRestaurantImage] = useState(null);

  const getRestaurantDetailsFunc = () => {
    getRestaurantDetailsById(restaurant.id)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantDetails(data[0]);
        if (data[0].is_delivery === 1) setIsDelivery(true);
        if (data[0].is_pickup === 1) setIsPickup(true);
        return getDishesByRestaurantId(restaurant.id);
      })
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        return getDishCategories();
      })
      .then((res) => res.json())
      .then((data) => {
        setDishCategories(data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (restaurantName) data.append("name", restaurantName);
    if (location) data.append("location", location);
    if (description) data.append("description", description);
    if (address) data.append("address", address);
    if (email) data.append("email", email);
    if (phoneNo) data.append("phone_no", phoneNo);
    if (timings) data.append("timings", timings);
    if (isDelivery) data.append("is_delivery", 1);
    else data.append("is_delivery", 0);
    if (isPickUp) data.append("is_pickup", 1);
    else data.append("is_pickup", 0);
    if (restaurantImage) data.append("myFile", restaurantImage);
    updateRestaurant(data, 3).then((res) => {
      if (res.data === "Success") {
        getRestaurantDetailsFunc();
        alert("SUCCESS");
      }
    });
  };

  const onEditDishModalClose = () => {
    setEditDishModal(false);
    getRestaurantDetailsFunc();
  };

  const handleAddDish = (e) => {
    e.preventDefault();
    setEditDishModal(true);
    setDishDetails(null);
  };

  const handleEditDish = (dish) => {
    setEditDishModal(true);
    setDishDetails(dish);
  };

  useEffect(() => {
    getRestaurantDetailsFunc();
  }, []);

  return (
    <>
      <Header restaurantFlag={true} />
      {restaurantDetails ? (
        <div class="container">
          <form onSubmit={onSubmit}>
            <div class="form-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter restaurant name"
                defaultValue={restaurantDetails.name}
                onChange={(e) => setRestaurantName(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Location</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter location"
                defaultValue={restaurantDetails.location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter description"
                defaultValue={restaurantDetails.description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter address"
                defaultValue={restaurantDetails.address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                defaultValue={restaurantDetails.email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Phone No.</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter phone no."
                defaultValue={restaurantDetails.phone_no}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Timings</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter timings"
                defaultValue={restaurantDetails.timings}
                onChange={(e) => setTimings(e.target.value)}
                required
              />
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="delivery"
                onClick={() => setIsDelivery(!isDelivery)}
                checked={isDelivery ? true : false}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Delivery
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="pickup"
                checked={isPickUp ? true : false}
                onClick={() => setIsPickup(!isPickUp)}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Pickup
              </label>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">
                Upload Restaurant Image
              </label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                onChange={(e) => setRestaurantImage(e.target.files[0])}
              />
              {restaurantDetails.restaurant_image ? (
                <img
                  style={{ width: "50px%", height: "50px" }}
                  src={restaurantDetails.restaurant_image}
                />
              ) : null}
            </div>
            <button type="submit" class="btn btn-primary">
              Save Changes
            </button>
          </form>

          <div class="container" style={{ padding: "25px", margin: 0 }}>
            <p>Dishes</p>
            <button class="btn btn-secondary btn-sm" onClick={handleAddDish}>
              Add new dish
            </button>
            <div class="row">
              {dishes &&
                dishes.map((dish) => (
                  <div class="col-4">
                    <DishCard
                      dish={dish}
                      restaurantFlag={true}
                      getRestaurantDetailsFunc={getRestaurantDetailsFunc}
                      handleEditDish={handleEditDish}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}
      <EditDishModal
        show={editDishModal}
        onHide={onEditDishModalClose}
        dish={dishDetails}
        dishCategories={dishCategories}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
});

export default connect(mapStateToProps)(RestaurantHome);
