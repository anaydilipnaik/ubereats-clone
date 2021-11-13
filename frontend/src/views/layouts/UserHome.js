import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { connect } from "react-redux";
import { getAllRestaurantsFunc } from "../../redux/actions/restaurantActions";

const UserHome = ({
  user,
  userLocation,
  userDeliveryType,
  getAllRestaurantsFunc,
}) => {
  const [restaurants, setRestaurants] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);

  const onSearchClick = (event) => {
    event.preventDefault();
    let filters = {};
    if (searchKeyword && searchKeyword != "")
      filters.searchKeyword = searchKeyword;
    filterRestaurantsFunc(filters);
  };

  const getRestaurantsFunc = (data) => {
    getAllRestaurantsFunc(data, user.token, setRestaurants);
  };

  const filterRestaurantsFunc = (filters) => {
    let restaurantsArr = [];
    restaurants &&
      restaurants.map((rest) => {
        if (rest.name.toLowerCase().includes(filters.searchKeyword)) {
          restaurantsArr.push(rest);
        }
      });
    if (restaurantsArr.length > 0) setRestaurants(restaurantsArr);
  };

  useEffect(() => {
    let filters = {};
    if (userLocation) filters.userLocation = userLocation;
    if (userDeliveryType) filters.userDeliveryType = userDeliveryType;
    if (filters.userLocation || filters.userDeliveryType)
      filterRestaurantsFunc(filters);
  }, [userLocation, userDeliveryType]);

  useEffect(() => {
    getRestaurantsFunc({});
  }, []);

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
                <RestaurantCard
                  restaurant={restaurant}
                  restaurantId={restaurant._id}
                />
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

export default connect(mapStateToProps, { getAllRestaurantsFunc })(UserHome);
