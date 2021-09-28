import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RestaurantCard from "../../components/cards/RestaurantCard";

const UserHome = () => {
  useEffect(() => {
    // API calls here
  }, []);

  return (
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-3 mb-4">
            <RestaurantCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHome;
