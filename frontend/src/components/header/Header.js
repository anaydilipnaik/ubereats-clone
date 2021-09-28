import React, { useState, useEffect } from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";
import UserLocation from "../modals/UserLocation";

const Header = () => {
  const [delivery, setDelivery] = useState("active");
  const [pickup, setPickup] = useState("");
  const [userAddress, setUserAddress] = useState("San Jose");
  const [showLocation, setShowLocation] = useState(false);

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
      <div class="container">
        <a class="navbar-brand" href="/" style={{ margin: "15px" }}>
          <img src={UberEatsLogo} />
        </a>
        <ul class="nav nav-tabs" style={{ margin: "15px" }}>
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
        <button
          type="button"
          class="btn btn-outline-primary"
          style={{ margin: "15px" }}
          onClick={() => {
            setShowLocation(true);
          }}
        >
          <i class="bi bi-pin-fill"></i> {userAddress}
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ margin: "15px" }}
        >
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
        </div>
        <button
          class="btn btn-outline-dark rounded-pill"
          style={{ margin: "15px" }}
        >
          <i class="bi-cart-fill me-1"></i>
          Cart
          <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
        </button>
        <button
          class="btn btn-outline-dark rounded-pill"
          onClick={() => {
            window.location.href = "/userlogin";
          }}
          style={{ margin: "15px" }}
        >
          Sign in
        </button>
      </div>
      <UserLocation show={showLocation} onHide={() => {}} />
    </nav>
  );
};

export default Header;
