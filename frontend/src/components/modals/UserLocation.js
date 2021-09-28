import React from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";

const UserLocation = ({ show, onHide }) => {
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
          Booking Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>test</Modal.Body>
      <Modal.Footer>test footer</Modal.Footer>
    </Modal>
  );
};

export default UserLocation;
