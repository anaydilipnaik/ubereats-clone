import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { updateOrderDeliveryStatusFunc } from "../../redux/actions/orderActions";

const ChangeDeliveryStatus = ({
  show,
  onHide,
  orderId,
  statusModalDeliveryType,
  restaurant,
  updateOrderDeliveryStatusFunc,
}) => {
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.orderStatus = status;
    updateOrderDeliveryStatusFunc(data, orderId, restaurant.token, onHide);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Delivery Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <select
              class="form-control"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              required
            >
              <option>Select delivery status</option>
              <option value="OR">Order Received</option>
              <option value="PR">Preparing</option>
              <option value={statusModalDeliveryType === "DL" ? "OTW" : "RPU"}>
                {statusModalDeliveryType === "DL"
                  ? "On the Way"
                  : "Ready for Pickup"}
              </option>
              <option value={statusModalDeliveryType === "DL" ? "DL" : "PU"}>
                {statusModalDeliveryType === "DL" ? "Delivered" : "Picked Up"}
              </option>
              <option value="CA">Cancel the Order</option>
            </select>
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                class="btn btn-primary btn-md"
                style={{ marginTop: "10px" }}
              >
                Change
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
});

export default connect(mapStateToProps, { updateOrderDeliveryStatusFunc })(
  ChangeDeliveryStatus
);
