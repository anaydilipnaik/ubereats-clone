import React, { useEffect, useState } from "react";
import { getCartItems, updateCart } from "../../controllers/cart";
import { connect } from "react-redux";
import {
  getOrderDetailsById,
  placeOrder,
  getUserAddresses,
} from "../../controllers/orders";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddUserAddress from "../../components/modals/AddUserAddress";

const Checkout = ({ user }) => {
  const [cartItems, setCartItems] = useState(null);
  const [orderPlacedStatus, setOrderPlacedStatus] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [userAddresses, setUserAddresses] = useState(null);
  const [userAddressId, setUserAddressId] = useState(null);
  const [addAddressModal, setAddAddressModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.userId = user._id;
    data.restaurantId = cartItems[0].restaurantId;
    data.orderStatus = "OR";
    data.deliveryType = "DL";
    data.userAddressId = parseInt(userAddressId);
    data.taxes = 0;
    data.total = cartSubtotal;
    let contentsArr = [];
    cartItems.map((item) => {
      let contentsObj = {};
      contentsObj.userId = user._id;
      contentsObj.restaurantId = item.restaurantId;
      contentsObj.dishId = item.dishId;
      contentsObj.dishPrice = item.dishPrice;
      contentsObj.qty = item.qty;
      contentsArr.push(contentsObj);
    });
    data.contents = contentsArr;
    placeOrder(data, user.token)
      .then((res) => res.json())
      .then((data) => {
        if (data[0][0].orderId) {
          getOrderDetailsById(data[0][0].orderId, user.token)
            .then((res) => res.json())
            .then((data) => {
              setOrderPlacedStatus(true);
              setPlacedOrderDetails(data);
            });
        }
      });
  };

  const getCartItemsFunc = () => {
    getCartItems(user._id, user.token)
      .then((res) => {
        let subtotal = 0;
        setCartItems(res.data);
        res.data.map((item) => {
          subtotal += item.dishPrice * item.qty;
        });
        setCartSubtotal(subtotal);
        return getUserAddresses(user._id), user.token;
      })
      .then((res) => setUserAddresses(res.data));
  };

  const onQtyChange = (value, id) => {
    let data = {};
    data.qty = value;
    updateCart(id, data, user.token)
      .then((res) => {
        if (res.status === 200) getCartItemsFunc();
      })
      .catch((err) => console.log(err));
  };

  const onAddAddressModalClose = () => {
    setAddAddressModal(false);
    getCartItemsFunc();
  };

  useEffect(() => {
    getCartItemsFunc();
  }, []);

  return (
    <>
      <Header />
      {orderPlacedStatus && placedOrderDetails ? (
        <section class="h-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-10 col-xl-8">
                <div class="card">
                  <div class="card-header px-4 py-5">
                    <h2 class="text-muted mb-0">
                      Thanks for your Order,{" "}
                      <span style={{ color: "blue" }}>{user.firstName}</span>!
                    </h2>
                    <p
                      style={{
                        marginTop: "25px",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      {placedOrderDetails[0].restaurantName} (
                      {placedOrderDetails[0].restaurantLocation})
                    </p>
                    {placedOrderDetails.map((item) => (
                      <>
                        <div class="row">
                          <div class="col-6">
                            <p>
                              {item.dishName} (x{item.qty})
                            </p>
                          </div>
                          <div class="col-6">
                            <p>{item.dishPrice} ea</p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div class="card-footer border-0 px-4 py-5">
                    <p>
                      <b>Order Status</b>:{" "}
                      {placedOrderDetails[0].deliveryType === "DL"
                        ? placedOrderDetails[0].orderStatus === "OR"
                          ? "Order Received"
                          : placedOrderDetails[0].orderStatus === "PR"
                          ? "Preparing"
                          : placedOrderDetails[0].orderStatus === "OTW"
                          ? "On the Way"
                          : placedOrderDetails[0].orderStatus === "DL"
                          ? "Delivered"
                          : null
                        : placedOrderDetails[0].deliveryType === "PU"
                        ? placedOrderDetails[0].orderStatus === "OR"
                          ? "Order Received"
                          : placedOrderDetails[0].orderStatus === "PR"
                          ? "Preparing"
                          : placedOrderDetails[0].orderStatus === "PUR"
                          ? "Pick Up Received"
                          : placedOrderDetails[0].orderStatus === "PU"
                          ? "Picked Up"
                          : null
                        : null}
                    </p>
                    <p>
                      <b>Address</b>:{" "}
                      {placedOrderDetails[0].address1 +
                        ", " +
                        placedOrderDetails[0].address2 +
                        ", " +
                        placedOrderDetails[0].landmark +
                        ", " +
                        placedOrderDetails[0].city +
                        " " +
                        placedOrderDetails[0].state}
                    </p>
                    <div class="row" style={{ marginTop: "75px" }}>
                      <div class="col-6">
                        <h6 class="mb-0">
                          <a href="/" class="text-body">
                            <i class="fas fa-long-arrow-alt-left me-2"></i>
                            Back to Home
                          </a>
                        </h6>
                      </div>
                      <div class="col-6">
                        <h5>
                          Total paid:{" "}
                          <span
                            class="h2 mb-0 ms-2"
                            style={{ textDecoration: "underline" }}
                          >
                            ${placedOrderDetails[0].total}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
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
                          {cartItems && cartItems.length > 0 ? (
                            cartItems.map((item) => (
                              <>
                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={item.dish_image}
                                      class="img-fluid rounded-3"
                                      alt={item.dishName}
                                    />
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                    <h6 class="text-muted">{item.dishName}</h6>
                                    <h6 class="text-black mb-0">
                                      {item.dish_description.substr(0, 80) +
                                        "..."}
                                    </h6>
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button
                                      class="btn"
                                      onClick={() => {
                                        onQtyChange(item.qty - 1, item.id);
                                      }}
                                    >
                                      <i class="bi bi-dash-lg"></i>
                                    </button>

                                    <h3>{item.qty}</h3>

                                    <button
                                      class="btn"
                                      onClick={() => {
                                        onQtyChange(item.qty + 1, item.id);
                                      }}
                                    >
                                      <i class="bi bi-plus-lg"></i>
                                    </button>
                                  </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 class="mb-0">${item.dish_price} ea</h6>
                                  </div>
                                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" class="text-muted">
                                      <i class="fas fa-times"></i>
                                    </a>
                                  </div>
                                </div>
                                <hr class="my-4" />
                              </>
                            ))
                          ) : (
                            <section class="h-100 gradient-custom">
                              <div class="container py-5 h-100">
                                <h2
                                  class="text-muted mb-0"
                                  style={{ textAlign: "center" }}
                                >
                                  Your Cart is Empty!
                                </h2>
                              </div>
                            </section>
                          )}
                          {cartItems && cartItems.length > 0 ? (
                            <>
                              <div class="row" style={{ marginBottom: "25px" }}>
                                <div class="col-6">
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                    onChange={(e) =>
                                      setUserAddressId(e.target.value)
                                    }
                                    required
                                  >
                                    <option>Select Address</option>
                                    {userAddresses &&
                                      userAddresses.map((addr) =>
                                        userAddressId === addr.id ? (
                                          <option value={addr.id} selected>
                                            {addr.address1 +
                                              ", " +
                                              addr.address2 +
                                              ", " +
                                              addr.landmark +
                                              ", " +
                                              addr.city +
                                              " " +
                                              addr.state}
                                          </option>
                                        ) : (
                                          <option value={addr.id}>
                                            {addr.address1 +
                                              ", " +
                                              addr.address2 +
                                              ", " +
                                              addr.landmark +
                                              ", " +
                                              addr.city +
                                              " " +
                                              addr.state}
                                          </option>
                                        )
                                      )}
                                  </select>
                                </div>
                                <div class="col-6">
                                  <button
                                    class="btn btn-sm btn-primary"
                                    onClick={() => setAddAddressModal(true)}
                                  >
                                    Add new Address
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : null}
                          <h6 class="mb-0">
                            <a href="/" class="text-body">
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to Home
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div class="col-lg-4 bg-grey">
                        <div class="p-5">
                          <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr class="my-4" />

                          <div class="d-flex justify-content-between mb-4">
                            <h5 class="text-uppercase">Subtotal</h5>
                            <h5>${cartSubtotal}</h5>
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
                            <h5>${cartSubtotal}</h5>
                          </div>

                          <button
                            type="button"
                            class="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                            style={{ width: "100%" }}
                            onClick={handleSubmit}
                            disabled={
                              cartItems && cartItems.length > 0 ? false : true
                            }
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
      )}
      <Footer />
      <AddUserAddress
        show={addAddressModal}
        onHide={onAddAddressModalClose}
        userId={user._id}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});
export default connect(mapStateToProps)(Checkout);
