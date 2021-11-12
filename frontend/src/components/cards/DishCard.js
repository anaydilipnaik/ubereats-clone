import React, { Component } from "react";
import { getUserCartCount } from "../../redux/actions";
import { connect } from "react-redux";
import AddToCartConfirmation from "../modals/AddToCartConfirmation";

class DishCard extends Component {
  constructor() {
    super();
    this.state = {
      cartFlag: false,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart = (e) => {
    e.preventDefault();
    let arr = [],
      data = {};
    if (sessionStorage.getItem("userCart"))
      arr = JSON.parse(sessionStorage.getItem("userCart"));
    let flag = false;
    arr.map((item) => {
      if (item.restaurantId !== this.props.dish.restaurantId) flag = true;
    });
    if (!flag) {
      data.userId = this.props.user._id;
      data.restaurantId = this.props.dish.restaurantId;
      data.cartStatus = "AC";
      data.deliveryType = "DL";
      data.dishPrice = this.props.dish.price;
      data.qty = 1;
      data.dishId = this.props.dish._id;
      data.dishName = this.props.dish.name;
      data.dishImage = this.props.dish.dishImage;
      data.dishDescription = this.props.dish.description;
      data.restaurantName = this.props.restaurantName;
      data.restaurantLocation = this.props.restaurantLocation;
      arr.push(data);
      sessionStorage.setItem("userCart", JSON.stringify(arr));
      this.setState({ cartFlag: false });
      this.props.getUserCartCount();
    } else {
      this.setState({ cartFlag: true });
    }
  };

  onCartModalClose = () => {
    this.setState({ cartFlag: false });
  };

  render() {
    return (
      <div class="card shadow-0 border rounded-3">
        <div class="card-body" style={{ height: "158px", padding: 0 }}>
          <div class="row">
            <div class="col-7">
              <p style={{ padding: "10px", fontSize: "14px", margin: 0 }}>
                <b>{this.props.dish.name}</b>
              </p>
              <p
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontSize: "12px",
                  margin: 0,
                }}
              >
                {this.props.dish.description.length > 60
                  ? this.props.dish.description.substr(0, 60) + "..."
                  : this.props.dish.description}
              </p>
              <div class="col-" style={{ textAlign: "left" }}>
                <p
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "50px",
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  ${this.props.dish.price}
                  {this.props.restaurantFlag ? (
                    <button
                      class="btn btn-secondary btn-sm"
                      onClick={() => this.props.handleEditDish(this.props.dish)}
                      style={{ marginLeft: "25px" }}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      class="btn btn-primary btn-sm"
                      onClick={this.handleAddToCart}
                      style={{ marginLeft: "25px" }}
                    >
                      Add to Cart
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div class="col-5">
              <img
                style={{ width: "100%", height: "158px" }}
                src={this.props.dish.dishImage}
              />
            </div>
          </div>
        </div>
        {this.state.cartFlag ? (
          <AddToCartConfirmation
            show={this.state.cartFlag}
            onHide={this.onCartModalClose}
            handleAddToCart={this.handleAddToCart}
            oldRestaurant={
              JSON.parse(sessionStorage.getItem("userCart"))[0].restaurantName
            }
            newRestaurant={this.props.restaurantName}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { getUserCartCount })(DishCard);
