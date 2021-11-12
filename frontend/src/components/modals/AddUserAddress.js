import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { addAddressFunc } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const AddUserAddress = ({ show, onHide, user, addAddressFunc }) => {
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.address1 = address1;
    data.address2 = address2;
    data.userId = user._id;
    data.landmark = landmark;
    data.city = city;
    data.state = state;
    addAddressFunc(data, user.token, onHide);
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
          Add Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label>
              <b>Address 1</b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter address 1"
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label style={{ marginTop: "15px" }}>
              <b>Address 2</b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter address 2"
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
          </div>
          <div class="row">
            <div class="col-4">
              <label style={{ marginTop: "15px" }}>
                <b>Landmark</b>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter landmark"
                onChange={(e) => setLandmark(e.target.value)}
                required
              />
            </div>
            <div class="col-4">
              <label style={{ marginTop: "15px" }}>
                <b>City</b>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div class="col-4">
              <label style={{ marginTop: "15px" }}>
                <b>State</b>
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter state"
                required
              />
            </div>
          </div>
          <div style={{ marginTop: "15px", textAlign: "right" }}>
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { addAddressFunc })(AddUserAddress);
