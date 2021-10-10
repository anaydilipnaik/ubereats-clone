import React, { Component } from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";
import UserLocation from "../modals/UserLocation";
import { connect } from "react-redux";
import {
  logoutUserFunc,
  logoutRestaurantFunc,
  getUserCartCount,
  setUserDeliveryType,
  setUserLocation,
} from "../../redux/actions";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { getCartItems } from "../../controllers/cart";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      delivery: null,
      pickup: null,
      showLocation: false,
      popoverOpen: false,
      cartItems: null,
    };
    this.deliveryTypeHandler = this.deliveryTypeHandler.bind(this);
    this.onLocationHide = this.onLocationHide.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  toggle = () => {
    getCartItems(this.props.user.id)
      .then((res) => res.json())
      .then((data) => this.setState({ cartItems: data }));
    this.setState({ popoverOpen: !this.state.popoverOpen });
  };

  componentDidMount() {
    if (!this.props.restaurantFlag) {
      if (this.props.user && this.props.user.id)
        this.props.getUserCartCount(this.props.user.id);
      if (this.props.userDeliveryType)
        this.setState({
          delivery: this.props.userDeliveryType === "DL" ? "active" : "",
          pickup: this.props.userDeliveryType === "PU" ? "active" : "",
        });
      else
        this.setState({
          delivery: "active",
          pickup: "",
        });
    }
  }

  deliveryTypeHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "delivery") {
      this.setState({ delivery: "active", pickup: "" });
      this.props.setUserDeliveryType("DL");
    } else {
      this.setState({ pickup: "active", delivery: "" });
      this.props.setUserDeliveryType("PU");
    }
  };

  onLocationHide = () => {
    this.setState({ showLocation: false });
  };

  onLocationChange = (location) => {
    this.props.setUserLocation(location);
    this.onLocationHide();
  };

  handleLogOut = (event) => {
    event.preventDefault();
    this.props.logoutUserFunc();
  };

  handleRestaurantLogOut = (event) => {
    event.preventDefault();
    this.props.logoutRestaurantFunc();
  };

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a
            class="navbar-brand"
            href={this.props.restaurantFlag ? "/restauranthome" : "/"}
            style={{ margin: "15px" }}
          >
            <img src={UberEatsLogo} />
          </a>
          {!this.props.restaurantFlag ? (
            <>
              <ul class="nav nav-tabs" style={{ margin: "15px" }}>
                <li class="nav-item">
                  <a
                    class={"nav-link " + this.state.delivery}
                    name="delivery"
                    onClick={this.deliveryTypeHandler}
                    style={{ cursor: "pointer" }}
                  >
                    Delivery
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={"nav-link " + this.state.pickup}
                    name="pickup"
                    onClick={this.deliveryTypeHandler}
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
                  this.setState({ showLocation: true });
                }}
              >
                <i class="bi bi-pin-fill"></i>{" "}
                {this.props.userLocation
                  ? this.props.userLocation
                  : "Enter your location"}
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
                    placeholder="What are you craving?"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => {
                      this.props.setSearchKeyword(e.target.value);
                    }}
                  />
                  <span
                    class="input-group-text border-0"
                    id="search-addon"
                    onClick={this.props.onSearchClick}
                    style={{ cursor: "pointer" }}
                  >
                    <i class="bi bi-search"></i>
                  </span>
                </div>
              </div>
              <div></div>
              <button
                class="btn btn-outline-dark rounded-pill"
                type="button"
                id="Popover1"
                style={{ margin: "15px" }}
              >
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {this.props.user && this.props.user.id
                    ? this.props.cartCount
                    : 0}
                </span>
              </button>
              <Popover
                placement="bottom"
                isOpen={this.state.popoverOpen}
                target="Popover1"
                toggle={this.toggle}
              >
                <PopoverHeader>My Cart</PopoverHeader>
                <PopoverBody>
                  {this.state.cartItems &&
                    this.state.cartItems.map((item) => (
                      <>
                        <div class="row">
                          <div class="col-8">
                            <h6>{item.dish_name}</h6>
                          </div>
                          <div class="col-4">
                            <h6 class="text-muted">${item.dish_price}</h6>
                          </div>
                        </div>
                      </>
                    ))}
                  <hr class="my-4" />
                  <div style={{ textAlign: "right" }}>
                    <button
                      class="btn btn-secondary btn-sm"
                      onClick={() => {
                        window.location.href = this.props.user.id
                          ? "/checkout"
                          : "/userlogin";
                      }}
                    >
                      Go to Checkout
                    </button>
                  </div>
                </PopoverBody>
              </Popover>
              <span
                class="btn btn-outline-dark rounded-pill"
                onClick={() => {
                  window.location.href =
                    this.props.user && this.props.user.id
                      ? "/userprofile"
                      : "userlogin";
                }}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              >
                <i class="bi bi-file-person-fill"></i>
              </span>
              <span
                class="btn btn-outline-dark rounded-pill"
                onClick={() => {
                  window.location.href =
                    this.props.user && this.props.user.id
                      ? "/userorders"
                      : "userlogin";
                }}
                style={{ margin: "15px" }}
              >
                <i class="bi bi-card-checklist"></i>
              </span>
              <span
                class="btn btn-outline-dark rounded-pill"
                onClick={() => {
                  window.location.href =
                    this.props.user && this.props.user.id
                      ? "/favourites"
                      : "userlogin";
                }}
                style={{ marginleft: "15px", cursor: "pointer" }}
              >
                <i class="bi bi-heart-fill"></i>
              </span>
              {this.props.user && this.props.user.id ? (
                <button
                  class="btn btn-outline-dark rounded-pill"
                  onClick={this.handleLogOut}
                  style={{ margin: "15px" }}
                >
                  Sign out
                </button>
              ) : (
                <button
                  class="btn btn-outline-dark rounded-pill"
                  onClick={() => {
                    window.location.href = "/userlogin";
                  }}
                  style={{ margin: "15px" }}
                >
                  Sign in
                </button>
              )}
            </>
          ) : (
            <div style={{ textAlign: "right" }}>
              <span
                class="btn btn-outline-dark rounded-pill"
                onClick={() => {
                  window.location.href =
                    this.props.restaurant && this.props.restaurant.id
                      ? "/restaurantorders"
                      : "restaurantlogin";
                }}
                style={{ margin: "15px" }}
              >
                <i class="bi bi-card-checklist"></i>
              </span>
              {this.props.restaurant && this.props.restaurant.id ? (
                <button
                  class="btn btn-outline-dark rounded-pill"
                  onClick={this.handleRestaurantLogOut}
                  style={{ margin: "15px" }}
                >
                  Sign out
                </button>
              ) : null}
            </div>
          )}
        </div>
        <UserLocation
          show={this.state.showLocation}
          onHide={this.onLocationHide}
          onLocationChange={this.onLocationChange}
          userAddress={this.props.userLocation}
        />
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  restaurant: state.login.restaurant,
  cartCount: state.cart.count,
  userLocation: state.userLocation.userLocation,
  userDeliveryType: state.userDeliveryType.userDeliveryType,
});
export default connect(mapStateToProps, {
  logoutUserFunc,
  logoutRestaurantFunc,
  getUserCartCount,
  setUserDeliveryType,
  setUserLocation,
})(Header);
