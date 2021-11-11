import React from "react";
import { addToFavouriteFunc } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const RestaurantCard = ({
  user,
  restaurant,
  restaurantId,
  addToFavouriteFunc,
}) => {
  const addToFavouriteButtonClick = (event) => {
    event.preventDefault();
    let data = {};
    data.userId = user._id;
    data.restaurantId = restaurant._id;
    data.restaurantName = restaurant.name;
    data.restaurantLocation = restaurant.location;
    data.restaurantImage = restaurant.restaurantImage;
    addToFavouriteFunc(data, user.token);
  };

  return (
    <div class="card" style={{ width: "235px", height: "188px" }}>
      <div
        class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img
          src={restaurant.restaurantImage}
          class="w-100"
          style={{ cursor: "pointer", height: "130px" }}
          onClick={() => {
            window.location.href = "/restaurantpage?id=" + restaurantId;
          }}
        />
      </div>
      <div
        class="card-body"
        style={{ padding: 0, marginTop: "10px", marginLeft: "5px" }}
      >
        <div class="row">
          <a
            href={"/restaurantpage?id=" + restaurantId}
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

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { addToFavouriteFunc })(RestaurantCard);
