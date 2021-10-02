import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { connect } from "react-redux";
import { getAllRestaurants } from "../../controllers/restaurants";

const UserHome = ({ user }) => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getAllRestaurants()
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <Header />
      <div class="container">
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
});

export default connect(mapStateToProps)(UserHome);
