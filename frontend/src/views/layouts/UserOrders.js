import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import {
  getOrdersByUserId,
  getOrderDetailsById,
} from "../../controllers/orders";
import OrderDetails from "../../components/modals/OrderDetails";

const UserOrders = ({ user }) => {
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [viewReceiptModal, setViewReceiptModal] = useState(false);

  const getOrdersFunc = () => {
    getOrdersByUserId(user.id)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  const onModalClick = (orderId) => {
    getOrderDetailsById(orderId)
      .then((res) => res.json())
      .then((data) => {
        setOrderDetails(data);
        setViewReceiptModal(true);
      });
  };

  const onModalClose = () => {
    setViewReceiptModal(false);
  };

  const onFilterClick = (e) => {
    e.preventDefault();
    let ordersTemp = [];
    orders.map((item) => {
      if (item.order_status === e.target.value) ordersTemp.push(item);
    });
    if (e.target.value === "all") getOrdersFunc();
    else setOrders(ordersTemp);
  };

  useEffect(() => {
    getOrdersFunc();
  }, []);

  return (
    <>
      <Header />
      <div class="container">
        <p style={{ fontSize: "36px", textDecoration: "underline" }}>
          Orders Page
        </p>
        <div class="row" style={{ marginBottom: "40px" }}>
          <div class="col-2">
            <b>Filter by Delivery Status:</b>
            <select class="form-control" onChange={onFilterClick} required>
              <option value="all">All Orders</option>
              <option value="OR">Order Received</option>
              <option value="PR">Preparing</option>
              <option value="OTW">On the Way</option>
              <option value="RPU">Ready for Pickup</option>
              <option value="DL">Delivered</option>
              <option value="PU">Picked Up</option>
            </select>
          </div>
        </div>
        {orders && orders.length > 0 ? (
          orders.map((item) => (
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
                      {item.restaurant_name +
                        " (" +
                        item.restaurant_location +
                        ")"}
                    </b>
                  </p>
                </div>
                <div class="col-12">
                  <p>
                    {item.delivery_type === "DL"
                      ? item.order_status === "OR"
                        ? "Order Received"
                        : item.order_status === "PR"
                        ? "Preparing"
                        : item.order_status === "OTW"
                        ? "On the Way"
                        : item.order_status === "DL"
                        ? "Delivered"
                        : null
                      : item.delivery_type === "PU"
                      ? item.order_status === "OR"
                        ? "Order Received"
                        : item.order_status === "PR"
                        ? "Preparing"
                        : item.order_status === "PUR"
                        ? "Pick Up Received"
                        : item.order_status === "PU"
                        ? "Picked Up"
                        : null
                      : null}
                  </p>
                </div>
                <div class="col-12">
                  <p>
                    {item.order_count} items for ${item.total} on {item.created}
                    .{" "}
                    <a
                      onClick={() => onModalClick(item.id)}
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
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(UserOrders);
