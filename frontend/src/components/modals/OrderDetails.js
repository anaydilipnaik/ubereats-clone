import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const OrderDetails = ({ show, onHide, orderDetails, restaurantFlag }) => {
  console.log(orderDetails);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orderDetails ? (
          <>
            <p
              style={{
                marginTop: "25px",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {restaurantFlag ? (
                <p>
                  Customer:{" "}
                  <b style={{ textDecoration: "underline" }}>
                    {orderDetails[0].first_name +
                      " " +
                      orderDetails[0].last_name}
                  </b>
                </p>
              ) : (
                orderDetails[0].restaurant_name +
                " " +
                orderDetails[0].restaurant_location
              )}
            </p>
            {orderDetails.map((item) => (
              <>
                <div class="row">
                  <div class="col-6">
                    <p>
                      {item.dish_name} (x{item.qty})
                    </p>
                  </div>
                  <div class="col-6">
                    <p>${item.dish_price}</p>
                  </div>
                </div>
              </>
            ))}
            <p>
              <b>Order Status</b>:{" "}
              {orderDetails[0].delivery_type === "DL"
                ? orderDetails[0].order_status === "OR"
                  ? "Order Received"
                  : orderDetails[0].order_status === "PR"
                  ? "Preparing"
                  : orderDetails[0].order_status === "OTW"
                  ? "On the Way"
                  : orderDetails[0].order_status === "DL"
                  ? "Delivered"
                  : null
                : orderDetails[0].delivery_type === "PU"
                ? orderDetails[0].order_status === "OR"
                  ? "Order Received"
                  : orderDetails[0].order_status === "PR"
                  ? "Preparing"
                  : orderDetails[0].order_status === "PUR"
                  ? "Pick Up Received"
                  : orderDetails[0].order_status === "PU"
                  ? "Picked Up"
                  : null
                : null}
            </p>
            <p>
              <b>Address</b>:{" "}
              {orderDetails[0].address_1 +
                ", " +
                orderDetails[0].address_2 +
                ", " +
                orderDetails[0].landmark +
                ", " +
                orderDetails[0].city +
                " " +
                orderDetails[0].state}
            </p>
            <div class="col-6" style={{ textAlign: "right" }}>
              <h5>
                Total paid:{" "}
                <span
                  class="h2 mb-0 ms-2"
                  style={{ textDecoration: "underline" }}
                >
                  ${orderDetails[0].total}
                </span>
              </h5>
            </div>
          </>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default OrderDetails;
