import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { updateOrderDeliveryStatus } from "../../controllers/orders";

const ChangeDeliveryStatus = ({ show, onHide, orderId }) => {
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.order_status = status;
    updateOrderDeliveryStatus(data, orderId).then((res) => {
      if (res.status === 200) {
        onHide();
      }
    });
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
            <label for="country">Change Status</label>
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
              <option value="OTW">On the Way</option>
              <option value="DL">Delivered</option>
            </select>
            <button type="submit" class="btn btn-primary btn-sm">
              Change
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeDeliveryStatus;
