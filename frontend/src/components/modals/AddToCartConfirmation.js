import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const EditDishModal = ({ show, onHide, handleAddToCart }) => {
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
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAddToCart}>
          <div class="row">
            <div class="col-6">
              <button class="btn btn-primary" type="button" onClick={onHide}>
                No
              </button>
            </div>
            <div class="col-6">
              <button class="btn btn-primary" type="submit">
                Yes
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditDishModal;
