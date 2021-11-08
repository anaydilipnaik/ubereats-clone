import React, { Component } from "react";
import { addToCart, getCartItems } from "../../controllers/cart";
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
    getCartItems(this.props.user._id, this.props.user.token)
      .then((res) => res.json())
      .then((data) => {
        let flag = false;
        data.map((item) => {
          if (item.restaurant_id !== this.props.dish.restaurant_id) flag = true;
        });
        if (!flag) {
          let data = {};
          data.restaurant_id = this.props.dish.restaurant_id;
          data.dish_id = this.props.dish.id;
          data.user_id = this.props.user.id;
          data.cart_status = "AC";
          data.delivery_type = "DL";
          data.dish_price = this.props.dish.price;
          data.qty = 1;
          addToCart(data, this.props.user.token)
            .then((res) => {
              if (res.status === 200) {
                this.setState({ cartFlag: false });
                return this.props.getUserCartCount(this.props.user.id);
              }
            })
            .catch((err) => console.log(err));
        } else
          alert("You already have items from another restaurant in the cart");
      });
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
                      onClick={() => this.setState({ cartFlag: true })}
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
                src={this.props.dish.dish_image}
              />
            </div>
          </div>
        </div>
        <AddToCartConfirmation
          show={this.state.cartFlag}
          onHide={this.onCartModalClose}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { getUserCartCount })(DishCard);
