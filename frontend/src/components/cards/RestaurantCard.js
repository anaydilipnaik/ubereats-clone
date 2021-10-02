import React from "react";

const RestaurantCard = ({ user, restaurant }) => {
  return (
    <div class="card" style={{ width: "235px", height: "188px" }}>
      <div
        class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/classic-buffalo-wings-horizontal-279-1547506077.jpg"
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
        <a href={"/restaurantpage?id=" + restaurant.id} class="text-reset">
          <h5
            style={{
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            {(restaurant.name + " (" + restaurant.location + ")").substr(
              0,
              25
            ) + "..."}
          </h5>
        </a>
        <h6
          class="mb-3"
          style={{
            textAlign: "left",
            fontSize: "14px",
          }}
        >
          {/* hardcoded for now */}
          $2.50 Delivery Fee • 25–35 min
        </h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
