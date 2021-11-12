import React from "react";
import { Modal } from "react-bootstrap";

const EditDishModal = ({
  show,
  onHide,
  handleAddToCart,
  oldRestaurant,
  newRestaurant,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("userCart");
    handleAddToCart(e);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new order?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>
          Create new order? Your order contains items from {oldRestaurant}.
          Create a new order to add items from {newRestaurant}?
        </label>
        <button
          class="btn btn-primary col-12"
          type="button"
          onClick={onSubmit}
          style={{ marginTop: "15px" }}
        >
          New Order
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default EditDishModal;
