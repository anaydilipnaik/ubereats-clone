import React from "react";

const DishCard = () => {
  return (
    <div class="card shadow-0 border rounded-3">
      <div class="card-body" style={{ height: "158px", padding: 0 }}>
        <div class="row">
          <div class="col-7">
            <p style={{ padding: "10px", fontSize: "14px", margin: 0 }}>
              <b>Double Smash Cheeseburger</b>
            </p>
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "12px",
                margin: 0,
              }}
            >
              {"Double Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun".substr(
                0,
                60
              ) + "..."}
            </p>
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "50px",
                fontSize: "14px",
                margin: 0,
              }}
            >
              $9.99
            </p>
          </div>
          <div class="col-5">
            <img
              style={{ width: "100%", height: "158px" }}
              src="https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
