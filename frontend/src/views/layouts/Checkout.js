import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddUserAddress from "../../components/modals/AddUserAddress";
import { getUserAddressesFunc } from "../../redux/actions/userActions";
import { placeOrderFunc } from "../../redux/actions/orderActions";
import { getUserCartCount } from "../../redux/actions";

const Checkout = ({
  user,
  getUserAddressesFunc,
  placeOrderFunc,
  getUserCartCount,
}) => {
  const [cartItems, setCartItems] = useState(null);
  const [orderPlacedStatus, setOrderPlacedStatus] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null);
  const [parentOrderDetails, setParentOrderDetails] = useState(null);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [userAddresses, setUserAddresses] = useState(null);
  const [userAddressId, setUserAddressId] = useState(null);
  const [addAddressModal, setAddAddressModal] = useState(false);
  const [specialInstruction, setSpecialInstruction] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.userId = user._id;
    data.firstName = user.firstName;
    data.lastName = user.lastName;
    data.restaurantName = cartItems[0].restaurantName;
    data.restaurantLocation = cartItems[0].restaurantLocation;
    data.orderCount = cartItems.length;
    data.createdAt = new Date().toDateString();
    data.restaurantId = cartItems[0].restaurantId;
    data.orderStatus = "OR";
    data.deliveryType = "DL";
    data.address = userAddressId;
    data.taxes = 0;
    data.total = cartSubtotal;
    if (specialInstruction) data.specialInstruction = specialInstruction;
    let contentsArr = [];
    cartItems.map((item) => {
      let contentsObj = {};
      contentsObj.userId = user._id;
      contentsObj.restaurantId = item.restaurantId;
      contentsObj.dishId = item.dishId;
      contentsObj.dishPrice = item.dishPrice;
      contentsObj.dishName = item.dishName;
      contentsObj.qty = item.qty;
      contentsArr.push(contentsObj);
    });
    data.contents = contentsArr;
    placeOrderFunc(
      data,
      user.token,
      setParentOrderDetails,
      setPlacedOrderDetails,
      setOrderPlacedStatus
    );
    sessionStorage.removeItem("userCart");
    getUserCartCount(user._id, user.token);
  };

  const getCartItemsFunc = () => {
    if (sessionStorage.getItem("userCart")) {
      setCartItems(JSON.parse(sessionStorage.getItem("userCart")));
      let subtotal = 0;
      JSON.parse(sessionStorage.getItem("userCart")).map((item) => {
        subtotal += item.dishPrice * item.qty;
      });
      setCartSubtotal(subtotal);
    }
    getUserAddressesFunc(user._id, user.token, setUserAddresses);
  };

  const onQtyChange = (value, index) => {
    let arrTemp = JSON.parse(sessionStorage.getItem("userCart"));
    arrTemp[index].qty = value;
    sessionStorage.setItem("userCart", JSON.stringify(arrTemp));
    setCartItems(arrTemp);
    getCartItemsFunc();
  };

  const onAddAddressModalClose = () => {
    setAddAddressModal(false);
    getCartItemsFunc();
  };

  const removeCartItem = (e, index) => {
    e.preventDefault();
    let arr = JSON.parse(sessionStorage.getItem("userCart"));
    arr.splice(index, 1);
    sessionStorage.setItem("userCart", JSON.stringify(arr));
    getCartItemsFunc();
    getUserCartCount(user._id, user.token);
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
                      {parentOrderDetails.restaurantName} (
                      {parentOrderDetails.restaurantLocation})
                    </p>
                    {placedOrderDetails.map((item) => (
                      <>
                        <div class="row">
                          <div class="col-6">
                            <p>
                              {item.dishName} (x{item.qty})
                            </p>
                          </div>
                          <div class="col-4">
                            <p>${item.dishPrice} ea</p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div class="card-footer border-0 px-4 py-5">
                    <p>
                      <b>Order Status</b>:{" "}
                      {parentOrderDetails.deliveryType === "DL"
                        ? parentOrderDetails.orderStatus === "OR"
                          ? "Order Received"
                          : parentOrderDetails.orderStatus === "PR"
                          ? "Preparing"
                          : parentOrderDetails.orderStatus === "OTW"
                          ? "On the Way"
                          : parentOrderDetails.orderStatus === "DL"
                          ? "Delivered"
                          : parentOrderDetails.orderStatus === "CA"
                          ? "Cancelled"
                          : null
                        : parentOrderDetails.deliveryType === "PU"
                        ? parentOrderDetails.orderStatus === "OR"
                          ? "Order Received"
                          : parentOrderDetails.orderStatus === "PR"
                          ? "Preparing"
                          : parentOrderDetails.orderStatus === "PUR"
                          ? "Pick Up Received"
                          : parentOrderDetails.orderStatus === "PU"
                          ? "Picked Up"
                          : parentOrderDetails.orderStatus === "CA"
                          ? "Cancelled"
                          : null
                        : null}
                    </p>
                    <p>
                      <b>Address</b>: {parentOrderDetails.address}
                    </p>
                    <p>
                      <b>Special Instructions</b>:{" "}
                      {parentOrderDetails.specialInstruction
                        ? parentOrderDetails.specialInstruction
                        : "-"}
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
                            ${parentOrderDetails.total}
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
                            cartItems.map((item, index) => (
                              <>
                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={item.dishImage}
                                      class="img-fluid rounded-3"
                                      alt={item.dishName}
                                    />
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                    <h6 class="text-muted">{item.dishName}</h6>
                                    <h6 class="text-black mb-0">
                                      {item.dishDescription.substr(0, 80) +
                                        "..."}
                                    </h6>
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button
                                      class="btn"
                                      onClick={() => {
                                        onQtyChange(item.qty - 1, index);
                                      }}
                                    >
                                      <i class="bi bi-dash-lg"></i>
                                    </button>

                                    <h3>{item.qty}</h3>

                                    <button
                                      class="btn"
                                      onClick={() => {
                                        onQtyChange(item.qty + 1, index);
                                      }}
                                    >
                                      <i class="bi bi-plus-lg"></i>
                                    </button>
                                  </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 class="mb-0">${item.dishPrice} ea</h6>
                                  </div>
                                  <div class="col-2">
                                    <span
                                      onClick={(e) => removeCartItem(e, index)}
                                      style={{
                                        cursor: "pointer",
                                        color: "red",
                                      }}
                                    >
                                      x
                                    </span>
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
                                      userAddresses.map((addr) => (
                                        <option
                                          value={
                                            addr.address1 +
                                            ", " +
                                            addr.address2 +
                                            ", " +
                                            addr.landmark +
                                            ", " +
                                            addr.city +
                                            " " +
                                            addr.state
                                          }
                                        >
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
                                      ))}
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
                              <label>
                                Add special instructions:&nbsp;&nbsp;
                              </label>
                              <input
                                type="text"
                                onChange={(e) =>
                                  setSpecialInstruction(e.target.value)
                                }
                                style={{ marginBottom: "25px" }}
                              />
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
export default connect(mapStateToProps, {
  getUserAddressesFunc,
  placeOrderFunc,
  getUserCartCount,
})(Checkout);
