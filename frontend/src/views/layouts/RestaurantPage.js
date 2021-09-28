import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DishCard from "../../components/cards/DishCard";

const RestaurantPage = () => {
  return (
    <>
      <Header />
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-4">
              <DishCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RestaurantPage;
