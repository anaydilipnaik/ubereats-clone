import React, { useState, useEffect } from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";

const Header = () => {
  const [delivery, setDelivery] = useState("active");
  const [pickup, setPickup] = useState("");
  const [userAddress, setUserAddress] = useState("San Jose");

  const deliveryTypeHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "delivery") {
      setDelivery("active");
      setPickup("");
    } else {
      setPickup("active");
      setDelivery("");
    }
  };

  useEffect(() => {
    // API calls here
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container" style={{ padding: "10px" }}>
        <a class="navbar-brand" href="/">
          <img src={UberEatsLogo} />
        </a>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class={"nav-link " + delivery}
              name="delivery"
              onClick={deliveryTypeHandler}
              style={{ cursor: "pointer" }}
            >
              Delivery
            </a>
          </li>
          <li class="nav-item">
            <a
              class={"nav-link " + pickup}
              name="pickup"
              onClick={deliveryTypeHandler}
              style={{ cursor: "pointer" }}
            >
              Pickup
            </a>
          </li>
        </ul>
        <button type="button" class="btn btn-outline-primary">
          <i class="bi bi-pin-fill"></i> {userAddress}
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search"></i>
            </span>
          </div>
          <button class="btn btn-outline-dark rounded-pill">
            <i class="bi-cart-fill me-1"></i>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
          <button
            class="rounded-pill"
            onClick={() => {
              window.location.href = "/userlogin";
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
