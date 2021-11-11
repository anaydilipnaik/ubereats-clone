import React from "react";
import { Modal } from "react-bootstrap";

const OrderDetails = ({
  show,
  onHide,
  orderDetails,
  orders,
  restaurantFlag,
}) => {
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
        {orders && orderDetails ? (
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
                    {orders.firstName + " " + orders.lastName}
                  </b>
                </p>
              ) : (
                orders.restaurantName + " " + orders.restaurantLocation
              )}
            </p>
            {orderDetails.map((item) => (
              <>
                <div class="row">
                  <div class="col-6">
                    <p>
                      {item.dishName} (x{item.qty})
                    </p>
                  </div>
                  <div class="col-6">
                    <p>${item.dishPrice}</p>
                  </div>
                </div>
              </>
            ))}
            <p>
              <b>Order Status</b>:{" "}
              {orders.deliveryType === "DL"
                ? orders.orderStatus === "OR"
                  ? "Order Received"
                  : orders.orderStatus === "PR"
                  ? "Preparing"
                  : orders.orderStatus === "OTW"
                  ? "On the Way"
                  : orders.orderStatus === "DL"
                  ? "Delivered"
                  : orders.orderStatus === "CA"
                  ? "Canceled"
                  : null
                : orders.deliveryType === "PU"
                ? orders.orderStatus === "OR"
                  ? "Order Received"
                  : orders.orderStatus === "PR"
                  ? "Preparing"
                  : orders.orderStatus === "PUR"
                  ? "Pick Up Received"
                  : orders.orderStatus === "PU"
                  ? "Picked Up"
                  : orders.orderStatus === "CA"
                  ? "Canceled"
                  : null
                : null}
            </p>
            <p>
              <b>Address</b>: {orders.address}
            </p>
            <p>
              <b>Special Instructions</b>:{" "}
              {orders.specialInstruction ? orders.specialInstruction : "-"}
            </p>
            <div class="col-6" style={{ textAlign: "right" }}>
              <h5>
                Total paid:{" "}
                <span
                  class="h2 mb-0 ms-2"
                  style={{ textDecoration: "underline" }}
                >
                  ${orders.total}
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
