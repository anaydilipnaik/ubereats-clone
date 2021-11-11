import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { updateOrderDeliveryStatusFunc } from "../../redux/actions/orderActions";

const CancelOrderConfirmation = ({
  show,
  onHide,
  orderId,
  user,
  updateOrderDeliveryStatusFunc,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "y") {
      let data = {};
      data.orderId = orderId;
      data.orderStatus = "CA";
      updateOrderDeliveryStatusFunc(data, orderId, user.token, onHide);
    } else onHide();
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
          Cancel Order?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="form-group">
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              class="btn btn-primary btn-md"
              value="n"
              style={{ marginTop: "10px" }}
              onClick={onSubmit}
            >
              No
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-primary btn-md"
              value="y"
              style={{ marginTop: "10px" }}
              onClick={onSubmit}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { updateOrderDeliveryStatusFunc })(
  CancelOrderConfirmation
);
