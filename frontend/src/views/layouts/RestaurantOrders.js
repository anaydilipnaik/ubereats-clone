import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import OrderDetails from "../../components/modals/OrderDetails";
import ChangeDeliveryStatus from "../../components/modals/ChangeDeliveryStatus";
import {
  getOrdersByRestaurantIdFunc,
  getFilteredOrdersByRestaurantIdFunc,
  getOrderDetailsByIdFunc,
} from "../../redux/actions/orderActions";

const RestaurantOrders = ({
  restaurant,
  getOrdersByRestaurantIdFunc,
  getFilteredOrdersByRestaurantIdFunc,
  getOrderDetailsByIdFunc,
}) => {
  const [orders, setOrders] = useState(null);
  const [ordersSelected, setOrdersSelected] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [viewReceiptModal, setViewReceiptModal] = useState(false);
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [statusModalOrderId, setStatusModalOrderId] = useState(null);
  const [statusModalDeliveryType, setStatusModalDeliveryType] = useState(null);

  const getOrdersFunc = () => {
    getOrdersByRestaurantIdFunc(restaurant._id, restaurant.token, setOrders);
  };

  const onModalClick = (orderId) => {
    getOrderDetailsByIdFunc(
      orderId,
      restaurant.token,
      setOrderDetails,
      setViewReceiptModal
    );
    orders.map((order) => {
      if (order._id === orderId) setOrdersSelected(order);
    });
  };

  const onStatusModalClose = () => {
    setChangeStatusModal(false);
    setStatusModalOrderId(null);
    getOrdersFunc();
  };

  const onModalClose = () => {
    setViewReceiptModal(false);
    getOrdersFunc();
  };

  const onChangeStatus = (orderId, deliveryType) => {
    setChangeStatusModal(true);
    setStatusModalOrderId(orderId);
    setStatusModalDeliveryType(deliveryType);
  };

  const onFilterClick = (e) => {
    e.preventDefault();
    let data = {};
    data.restaurantId = restaurant._id;
    data.orderStatus = e.target.value;
    if (e.target.value === "all") getOrdersFunc();
    else getFilteredOrdersByRestaurantIdFunc(data, restaurant.token, setOrders);
  };

  useEffect(() => {
    getOrdersFunc();
  }, []);

  return (
    <>
      <Header restaurantFlag={true} />
      <div class="container">
        <p style={{ fontSize: "36px", textDecoration: "underline" }}>
          Orders Page
        </p>
        <div class="row" style={{ marginBottom: "40px" }}>
          <div class="col-2">
            <b>Filter by Delivery Status:</b>
            <select class="form-control" onChange={onFilterClick} required>
              <option value="all">All Orders</option>
              <option value="OR">New Order</option>
              <option value="DL">Delivered Order</option>
              <option value="CA">Cancelled Order</option>
            </select>
          </div>
        </div>
        {orders && orders.length > 0 ? (
          orders.reverse().map((item) => (
            <>
              <div class="row">
                <div class="col-12">
                  <p>
                    <b
                      style={{
                        color: "black",
                        fontSize: "24px",
                      }}
                    >
                      {item.firstName + " " + item.lastName}{" "}
                    </b>
                    <a
                      href={
                        "/userprofile?userid=" +
                        item.userId +
                        "&restaurant=true"
                      }
                      style={{ color: "black", fontSize: "24px" }}
                    >
                      (<i>View Profile</i>)
                    </a>
                  </p>
                </div>
                <div class="col-12">
                  <p>
                    {item.deliveryType === "DL"
                      ? item.orderStatus === "OR"
                        ? "Order Received"
                        : item.orderStatus === "PR"
                        ? "Preparing"
                        : item.orderStatus === "OTW"
                        ? "On the Way"
                        : item.orderStatus === "DL"
                        ? "Delivered"
                        : item.orderStatus === "CA"
                        ? "Cancelled"
                        : null
                      : item.deliveryType === "PU"
                      ? item.orderStatus === "OR"
                        ? "Order Received"
                        : item.orderStatus === "PR"
                        ? "Preparing"
                        : item.orderStatus === "PUR"
                        ? "Pick Up Received"
                        : item.orderStatus === "PU"
                        ? "Picked Up"
                        : item.orderStatus === "CA"
                        ? "Cancelled"
                        : null
                      : null}
                    <button
                      style={{ marginLeft: "15px" }}
                      class="btn btn-primary btn-sm"
                      onClick={() =>
                        onChangeStatus(item._id, item.deliveryType)
                      }
                    >
                      Change Status
                    </button>
                  </p>
                </div>
                <div class="col-12">
                  <p>
                    {item.orderCount} items for ${item.total} on{" "}
                    {item.createdAt}.{" "}
                    <a
                      onClick={() => onModalClick(item._id)}
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      View Receipt
                    </a>
                  </p>
                </div>
              </div>
              <hr />
            </>
          ))
        ) : (
          <p style={{ fontSize: "24px" }}>Sorry, no orders found</p>
        )}
      </div>
      <Footer />
      <OrderDetails
        show={viewReceiptModal}
        onHide={onModalClose}
        orderDetails={orderDetails}
        orders={ordersSelected}
        restaurantFlag={true}
      />
      <ChangeDeliveryStatus
        show={changeStatusModal}
        onHide={onStatusModalClose}
        orderId={statusModalOrderId}
        statusModalDeliveryType={statusModalDeliveryType}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
});

export default connect(mapStateToProps, {
  getOrdersByRestaurantIdFunc,
  getFilteredOrdersByRestaurantIdFunc,
  getOrderDetailsByIdFunc,
})(RestaurantOrders);
