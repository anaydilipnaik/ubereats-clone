import React from "react";
import { addToFavourite } from "../../controllers/user";

const RestaurantCard = ({ user, restaurant }) => {
  const addToFavouriteButtonClick = (event) => {
    event.preventDefault();
    let data = {};
    data.user_id = user._id;
    data.restaurant_id = restaurant._id;
    addToFavourite(data, user.token).then((res) => {
      if (res.status === 200) alert("Added to favourites");
    });
  };

  return (
    <div class="card" style={{ width: "235px", height: "188px" }}>
      <div
        class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img
          src={restaurant.restaurant_image}
          class="w-100"
          style={{ cursor: "pointer", height: "130px" }}
          onClick={() => {
            window.location.href = "/restaurantpage?id=" + restaurant.id;
          }}
        />
      </div>
      <div
        class="card-body"
        style={{ padding: 0, marginTop: "10px", marginLeft: "5px" }}
      >
        <div class="row">
          <a
            href={"/restaurantpage?id=" + restaurant.id}
            class="text-reset col-10"
          >
            <h5
              style={{
                textAlign: "left",
                fontSize: "16px",
              }}
            >
              {(restaurant.name + " (" + restaurant.location + ")").length > 25
                ? (restaurant.name + " (" + restaurant.location + ")").substr(
                    0,
                    25
                  ) + "..."
                : restaurant.name + " (" + restaurant.location + ")"}
            </h5>
          </a>
          <span
            onClick={addToFavouriteButtonClick}
            style={{ cursor: "pointer" }}
            class="col-2"
          >
            <i class="bi bi-heart"></i>
          </span>
        </div>
        <h6
          class="mb-3"
          style={{
            textAlign: "left",
            fontSize: "14px",
          }}
        >
          {/* hardcoded for now */}
          $0 Delivery Fee • 25–35 min
        </h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
