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
      <RestaurantCard />
      <Footer />
    </>
  );
};

export default UserHome;
