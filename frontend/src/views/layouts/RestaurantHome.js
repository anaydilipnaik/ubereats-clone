import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import {
  getRestaurantDetailsById,
  getDishesByRestaurantId,
  getDishCategories,
} from "../../controllers/restaurants";
import DishCard from "../../components/cards/DishCard";
import EditDishModal from "../../components/modals/EditDishModal";

const RestaurantHome = ({ restaurant }) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [editDishModal, setEditDishModal] = useState(false);
  const [dishDetails, setDishDetails] = useState(null);
  const [dishCategories, setDishCategories] = useState(null);

  const getRestaurantDetailsFunc = () => {
    getRestaurantDetailsById(restaurant.id)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantDetails(data[0]);
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
          <div class="col-12" style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "240px" }}
              src={restaurantDetails.restaurant_image}
            />
          </div>
          <div class="container" style={{ padding: "25px", margin: 0 }}>
            <div style={{ fontSize: "14px" }} class="col-8">
              <p>{restaurantDetails.description}</p>
              <p>{restaurantDetails.address}</p>
            </div>
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
