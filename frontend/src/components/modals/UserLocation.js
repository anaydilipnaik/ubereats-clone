import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const UserLocation = ({ show, onHide, onLocationChange, userAddress }) => {
  const [locationString, setLocationString] = useState(userAddress);

  const onLocationChangeHandler = (event) => {
    event.preventDefault();
    onLocationChange(locationString);
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
          User Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row gutters">
          <div class="form-group">
            <div class="row">
              <div class="col-12">
                <input
                  type="text"
                  name="location"
                  class="form-control"
                  id="location"
                  placeholder="Enter your location"
                  defaultValue={userAddress}
                  onChange={(e) => {
                    setLocationString(e.target.value);
                  }}
                />
              </div>
              <div style={{ marginTop: "15px", textAlign: "right" }}>
                <button
                  type="button"
                  onClick={onLocationChangeHandler}
                  class="btn btn-md btn-primary"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UserLocation;
