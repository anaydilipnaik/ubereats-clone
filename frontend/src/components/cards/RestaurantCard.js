import React from "react";

const RestaurantCard = () => {
  return (
    <div class="card">
      <div
        class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg"
          class="w-100"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/restaurantpage";
          }}
        />
      </div>
      <div class="card-body">
        <a href="/restaurantpage" class="text-reset">
          <h5 class="card-title mb-3" style={{ textAlign: "left" }}>
            Product name
          </h5>
        </a>
        <h6 class="mb-3">$61.99</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
