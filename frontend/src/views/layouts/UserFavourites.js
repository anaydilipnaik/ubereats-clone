import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { connect } from "react-redux";
import { getUserFavourites } from "../../controllers/user";

const UserFavourites = ({ user }) => {
  const [favourites, setFavourites] = useState(null);

  const getRestaurantsFunc = () => {
    getUserFavourites(user.id)
      .then((res) => res.json())
      .then((data) => setFavourites(data));
  };

  useEffect(() => {
    getRestaurantsFunc();
  }, []);

  return (
    <>
      <Header />
      <div class="container">
        <div class="row">
          {favourites &&
            favourites.map((restaurant) => (
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

export default connect(mapStateToProps)(UserFavourites);
