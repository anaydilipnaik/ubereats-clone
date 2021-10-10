import React, { Component } from "react";
import { addToCart, getCartItems } from "../../controllers/cart";
import { getUserCartCount } from "../../redux/actions";
import { connect } from "react-redux";

class DishCard extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart = (e) => {
    e.preventDefault();
    getCartItems(39)
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
          data.user_id = 39;
          data.cart_status = "AC";
          data.delivery_type = "DL";
          data.qty = 1;
          addToCart(data)
            .then((res) => {
              if (res.status === 200) return this.props.getUserCartCount(39);
            })
            .catch((err) => console.log(err));
        } else alert("Already added to cart");
      });
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
                {this.props.dish.description.substr(0, 60) + "..."}
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
                src={this.props.dish.dish_image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getUserCartCount })(DishCard);
