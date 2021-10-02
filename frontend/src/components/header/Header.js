import React, { Component } from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";
import UserLocation from "../modals/UserLocation";
import { connect } from "react-redux";
import { logoutUserFunc } from "../../redux/actions";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      delivery: "active",
      pickup: "",
      userAddress: "San Jose",
      showLocation: false,
    };
    this.deliveryTypeHandler = this.deliveryTypeHandler.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  deliveryTypeHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "delivery") {
      this.setState({ delivery: "active" });
      this.setState({ pickup: "" });
    } else {
      this.setState({ pickup: "active" });
      this.setState({ delivery: "" });
    }
  };

  handleLogOut = (event) => {
    event.preventDefault();
    this.props.logoutUserFunc();
  };

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/" style={{ margin: "15px" }}>
            <img src={UberEatsLogo} />
          </a>
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
              this.setState({ location: true });
            }}
          >
            <i class="bi bi-pin-fill"></i> {this.state.userAddress}
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
          {(this.props.user && this.props.user.id) ||
          (this.props.restaurant && this.props.restaurant.id) ? (
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
        </div>
        <UserLocation show={this.state.showLocation} onHide={() => {}} />
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  restaurant: state.login.restaurant,
});
export default connect(mapStateToProps, { logoutUserFunc })(Header);
