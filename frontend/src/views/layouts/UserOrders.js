import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import OrderDetails from "../../components/modals/OrderDetails";
import {
  getOrdersByUserIdFunc,
  getOrderDetailsByIdFunc,
  getFilteredOrdersByUserIdFunc,
} from "../../redux/actions/orderActions";
import CancelOrderConfirmation from "../../components/modals/CancelOrderConfirmation";
import { Pagination } from "@mui/material";

const UserOrders = ({
  user,
  getOrdersByUserIdFunc,
  getOrderDetailsByIdFunc,
  getFilteredOrdersByUserIdFunc,
}) => {
  const [orders, setOrders] = useState(null);
  const [ordersSelected, setOrdersSelected] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [viewReceiptModal, setViewReceiptModal] = useState(false);
  const [pageCount, setPageCount] = useState(null);
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [statusModalOrderId, setStatusModalOrderId] = useState(null);
  const [records, setRecords] = useState(5);
  const [page, setPage] = useState(1);
  const [leftPointer, setLeftPointer] = useState(0);

  const getOrdersFunc = (totalRecords) => {
    getOrdersByUserIdFunc(
      user._id,
      user.token,
      setOrders,
      setPageCount,
      totalRecords
    );
  };

  const onModalClick = (orderId) => {
    console.log(orderId);
    getOrderDetailsByIdFunc(
      orderId,
      user.token,
      setOrderDetails,
      setViewReceiptModal
    );
    orders.map((order) => {
      if (order._id === orderId) setOrdersSelected(order);
    });
  };

  const onModalClose = () => {
    setViewReceiptModal(false);
  };

  const onFilterClick = (e) => {
    e.preventDefault();
    let data = {};
    data.userId = user._id;
    data.orderStatus = e.target.value;
    if (e.target.value === "all") getOrdersFunc();
    else
      getFilteredOrdersByUserIdFunc(
        data,
        user.token,
        setOrders,
        setPageCount,
        records
      );
  };

  const setRecordsFunc = (e) => {
    e.preventDefault();
    setRecords(parseInt(e.target.value));
    getOrdersFunc(e.target.value);
  };

  const onCancelOrderClick = (e, orderId) => {
    e.preventDefault();
    setChangeStatusModal(true);
    setStatusModalOrderId(orderId);
  };

  const onStatusModalClose = () => {
    setChangeStatusModal(false);
    setStatusModalOrderId(null);
    getOrdersFunc();
  };

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
    setLeftPointer(records * (value - 1));
  };

  useEffect(() => {
    getOrdersFunc(records);
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
              <option value="CA">Cancelled</option>
            </select>
          </div>
        </div>
        {orders && orders.length > 0 ? (
          orders.map((item, index) =>
            index >= leftPointer && index <= records * page - 1 ? (
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
                        {item.restaurantName +
                          " (" +
                          item.restaurantLocation +
                          ")"}
                      </b>
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
                      &nbsp;&nbsp;
                      {item.orderStatus === "OR" ? (
                        <button
                          onClick={(e) => onCancelOrderClick(e, item._id)}
                        >
                          Cancel Order
                        </button>
                      ) : null}
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
            ) : null
          )
        ) : (
          <p style={{ fontSize: "24px" }}>Sorry, no orders found</p>
        )}
        <label>Select the no. of records</label>
        <select onChange={setRecordsFunc}>
          <option value={2}>2</option>
          <option selected value={5}>
            5
          </option>
          <option value={10}>10</option>
        </select>
        <Pagination
          count={pageCount}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </div>
      <Footer />
      <OrderDetails
        show={viewReceiptModal}
        onHide={onModalClose}
        orderDetails={orderDetails}
        orders={ordersSelected}
      />
      <CancelOrderConfirmation
        show={changeStatusModal}
        onHide={onStatusModalClose}
        orderId={statusModalOrderId}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, {
  getOrdersByUserIdFunc,
  getOrderDetailsByIdFunc,
  getFilteredOrdersByUserIdFunc,
})(UserOrders);
