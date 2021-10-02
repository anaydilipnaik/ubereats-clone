import React, { useEffect, useState } from "react";
import { getCartItems } from "../../controllers/cart";
import { connect } from "react-redux";
import { placeOrder } from "../../controllers/orders";

const Checkout = ({ user }) => {
  const [cartItems, setCartItems] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.user_id = user.id;
    data.restaurant_id = cartItems[0].restaurant_id;
    data.order_status = "OR";
    data.delivery_type = "DL";
    data.taxes = 10;
    data.total = 100;
    let contentsArr = [];
    cartItems.map((item) => {
      let contentsObj = {};
      contentsObj.user_id = user.id;
      contentsObj.restaurant_id = item.restaurant_id;
      contentsObj.dish_id = item.dish_id;
      contentsObj.qty = item.qty;
      contentsArr.push(contentsObj);
    });
    data.contents = contentsArr;
    placeOrder(data).then((res) => console.log(res));
  };

  useEffect(() => {
    getCartItems(39)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  return (
    <>
      <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Your Items</h1>
                          <h6 class="mb-0 text-muted">
                            {cartItems ? cartItems.length + " item(s)" : null}
                          </h6>
                        </div>
                        <hr class="my-4" />

                        {cartItems &&
                          cartItems.map((item) => (
                            <>
                              <div class="row mb-4 d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={item.dish_image}
                                    class="img-fluid rounded-3"
                                    alt={item.dish_name}
                                  />
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <h6 class="text-muted">{item.dish_name}</h6>
                                  <h6 class="text-black mb-0">
                                    {item.dish_description.substr(0, 80) +
                                      "..."}
                                  </h6>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button
                                    class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                  >
                                    <i class="fas fa-minus"></i>
                                  </button>

                                  <input
                                    id="form1"
                                    min="0"
                                    name="quantity"
                                    value={item.qty}
                                    type="number"
                                    class="form-control form-control-sm"
                                  />

                                  <button
                                    class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                  >
                                    <i class="fas fa-plus"></i>
                                  </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 class="mb-0">${item.dish_price}</h6>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" class="text-muted">
                                    <i class="fas fa-times"></i>
                                  </a>
                                </div>
                              </div>
                              <hr class="my-4" />
                            </>
                          ))}

                        <div class="pt-5">
                          <h6 class="mb-0">
                            <a href="/" class="text-body">
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to Home
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">Subtotal</h5>
                          <h5>$6.99</h5>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">Delivery Fee</h5>
                          <h5>$0</h5>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">Service Fee</h5>
                          <h5>$0</h5>
                        </div>
                        <div
                          class="d-flex justify-content-between"
                          style={{ marginBottom: "75px" }}
                        >
                          <h5 class="text-uppercase">Taxes</h5>
                          <h5>$0</h5>
                        </div>

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>$6.99</h5>
                        </div>

                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          style={{ width: "100%" }}
                          onClick={handleSubmit}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* test start */}
      {/* <section class="vh-100" style={{ backgroundColor: "#35558a" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100 text-center">
            <div class="col">
              <button
                type="button"
                class="btn btn-light btn-lg"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
              >
                <i class="fas fa-info me-2"></i> Get information
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start text-black p-4">
                      <h5
                        class="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                        Johnatan Miller
                      </h5>
                      <h4 class="mb-5" style={{ color: "#35558a" }}>
                        Thanks for your order
                      </h4>
                      <p class="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        class="mt-2 mb-4"
                        style={{
                          height: 0,
                          backgroundColor: "transparent",
                          opacity: 0.75,
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                      <div class="d-flex justify-content-between">
                        <p class="fw-bold mb-0">Ether Chair(Qty:1)</p>
                        <p class="text-muted mb-0">$1750.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="small mb-0">Shipping</p>
                        <p class="small mb-0">$175.00</p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <p class="small">Tax</p>
                        <p class="small">$200.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="fw-bold">Total</p>
                        <p class="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
                      <button
                        type="button"
                        class="btn btn-primary btn-lg mb-1"
                        style={{ backgroundColor: "#35558a" }}
                      >
                        Track your order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* test end */}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});
export default connect(mapStateToProps)(Checkout);
