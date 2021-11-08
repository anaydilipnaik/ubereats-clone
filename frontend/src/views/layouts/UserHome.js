import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { connect } from "react-redux";
import { getAllRestaurants } from "../../controllers/restaurants";

const UserHome = ({ user, userLocation, userDeliveryType }) => {
  const [restaurants, setRestaurants] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);

  const onSearchClick = (event) => {
    event.preventDefault();
    const data = {};
    if (searchKeyword && searchKeyword !== "") {
      data.searchKeyword = searchKeyword;
      getRestaurantsFunc(data);
    }
  };

  const getRestaurantsFunc = (data) => {
    getAllRestaurants(data, user.token)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  useEffect(() => {
    let data = {};
    if (userLocation) data.userLocation = userLocation;
    if (userDeliveryType) data.userDeliveryType = userDeliveryType;
    getRestaurantsFunc(data);
  }, [userLocation, userDeliveryType]);

  return (
    <>
      <Header
        setSearchKeyword={setSearchKeyword}
        onSearchClick={onSearchClick}
      />
      <div class="container">
        <p
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <b>Crave it? Get it.</b>
          <p style={{ fontSize: "18px" }}>
            Search for a favourite restaurant, cuisine, or dish.
          </p>
        </p>
        <div class="row">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div class="col-3 mb-4">
                <RestaurantCard user={user} restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
  userLocation: state.userLocation.userLocation,
  userDeliveryType: state.userDeliveryType.userDeliveryType,
});

export default connect(mapStateToProps)(UserHome);
