import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DishCard from "../../components/cards/DishCard";
import {
  getRestaurantDetailsById,
  getDishesByRestaurantId,
} from "../../controllers/restaurants";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const RestaurantPage = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [dishes, setDishes] = useState(null);

  const search = useLocation().search;
  const restaurantId = new URLSearchParams(search).get("id");

  useEffect(() => {
    getRestaurantDetailsById(restaurantId, user.token)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantDetails(data[0]);
        return getDishesByRestaurantId(restaurantId, user.token);
      })
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      {restaurantDetails ? (
        <>
          <div class="col-12" style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "240px" }}
              src={restaurantDetails.restaurant_image}
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                left: "16px",
                color: "white",
              }}
            >
              <p
                style={{
                  fontSize: "36px",
                  margin: 0,
                  padding: 0,
                }}
              >
                <b>
                  {restaurantDetails.name +
                    " (" +
                    restaurantDetails.location +
                    ")"}
                </b>
              </p>
              <p
                style={{
                  fontSize: "20px",
                  margin: 0,
                  padding: 0,
                }}
              >
                $0.0 Delivery Fee • 25–35 min
              </p>
            </div>
          </div>
          <div class="container" style={{ padding: "25px", margin: 0 }}>
            <div style={{ fontSize: "14px" }} class="col-8">
              <p>{restaurantDetails.description}</p>
              <p>{restaurantDetails.address}</p>
            </div>
            <h4 style={{ marginBottom: "20px", marginTop: "35px" }}>
              <b>Picked for you</b>
            </h4>
            <div class="row">
              {dishes &&
                dishes.map((dish) => (
                  <div class="col-4">
                    <DishCard dish={dish} />
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(RestaurantPage);
