import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { countryList } from "../../utils/countries";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUserDetailsFunc,
  updateUserFunc,
} from "../../redux/actions/userActions";

const UserProfile = ({ user, getUserDetailsFunc, updateUserFunc }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDob] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [displayPicture, setDisplayPicture] = useState(null);

  const search = useLocation().search;
  const userId = new URLSearchParams(search).get("userid");
  const isRestaurant = new URLSearchParams(search).get("restaurant");

  const onUpdateProfile = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (firstName) data.append("firstName", firstName);
    if (middleName) data.append("middleName", middleName);
    if (lastName) data.append("lastName", lastName);
    if (dob) data.append("dob", dob);
    if (nickname) data.append("nickname", nickname);
    if (city) data.append("city", city);
    if (state) data.append("state", state);
    if (country) data.append("country", country);
    if (email) data.append("email", email);
    if (phoneNo) data.append("phoneNo", phoneNo);
    if (displayPicture) data.append("myFile", displayPicture);
    if (
      firstName ||
      middleName ||
      lastName ||
      dob ||
      nickname ||
      city ||
      state ||
      country ||
      email ||
      phoneNo ||
      displayPicture
    )
      updateUserFunc(data, user._id, user.token, setUserDetails);
  };

  const getUserDetailsFunction = () => {
    getUserDetailsFunc(userId ? userId : user._id, null, setUserDetails);
  };

  useEffect(() => {
    getUserDetailsFunction();
  }, []);

  return (
    <>
      <Header restaurantFlag={isRestaurant === "true" ? true : false} />
      {userDetails ? (
        <form onSubmit={onUpdateProfile}>
          <div class="container">
            <div class="row gutters">
              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="account-settings">
                      <div class="user-profile">
                        <div class="user-avatar">
                          <img src={userDetails.displayPicture} alt="user dp" />
                        </div>
                        <h5 class="user-name">
                          {userDetails.firstName + " " + userDetails.lastName}
                        </h5>
                        <h6 class="user-email">{userDetails.email}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Basic Details</h6>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <div class="row" style={{ marginBottom: "15px" }}>
                            <div class="col-4">
                              <label for="fullName">First Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="fullName"
                                placeholder="Enter first name"
                                onChange={(e) => {
                                  setFirstName(e.target.value);
                                }}
                                defaultValue={userDetails.firstName}
                                disabled={
                                  isRestaurant === "true" ? true : false
                                }
                              />
                            </div>
                            <div class="col-4">
                              <label for="fullName">Middle Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="fullName"
                                placeholder="Enter middle name"
                                onChange={(e) => {
                                  setMiddleName(e.target.value);
                                }}
                                defaultValue={userDetails.middleName}
                                disabled={
                                  isRestaurant === "true" ? true : false
                                }
                              />
                            </div>
                            <div class="col-4">
                              <label for="fullName">Last Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="fullName"
                                placeholder="Enter last name"
                                onChange={(e) => {
                                  setLastName(e.target.value);
                                }}
                                defaultValue={userDetails.lastName}
                                disabled={
                                  isRestaurant === "true" ? true : false
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="phone">Date of Birth</label>
                          <input
                            type="text"
                            class="form-control"
                            id="dob"
                            placeholder="Enter date of birth"
                            onChange={(e) => {
                              setDob(e.target.value);
                            }}
                            defaultValue={userDetails.dob}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="nickname">Nickname</label>
                          <input
                            type="text"
                            class="form-control"
                            id="nickname"
                            placeholder="Enter nickname"
                            onChange={(e) => {
                              setNickname(e.target.value);
                            }}
                            defaultValue={userDetails.nickname}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="website">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="city"
                            placeholder="Enter City"
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                            defaultValue={userDetails.city}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="phone">State</label>
                          <input
                            type="text"
                            class="form-control"
                            id="state"
                            placeholder="Enter state"
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                            defaultValue={userDetails.state}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="country">Country</label>
                          <select
                            class="form-control"
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}
                            disabled={isRestaurant === "true" ? true : false}
                          >
                            <option>Select a country</option>
                            {countryList &&
                              countryList.map((country) =>
                                userDetails.country === country.name ? (
                                  <option value={country.name} selected>
                                    {country.name}
                                  </option>
                                ) : (
                                  <option value={country.name}>
                                    {country.name}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mt-3 mb-2 text-primary">
                          Contact Information
                        </h6>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="Email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="Email"
                            placeholder="Enter email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            defaultValue={userDetails.email}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                        style={{ marginBottom: "15px" }}
                      >
                        <div class="form-group">
                          <label for="phoneno">Phone no.</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phoneno"
                            placeholder="Enter Phone"
                            onChange={(e) => {
                              setPhoneNo(e.target.value);
                            }}
                            defaultValue={userDetails.phoneNo}
                            disabled={isRestaurant === "true" ? true : false}
                          />
                        </div>
                      </div>
                      {isRestaurant === "true" ? null : (
                        <div
                          class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                          style={{ marginBottom: "15px" }}
                        >
                          <div class="form-group">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 class="mb-2 text-primary">Display Picture</h6>
                            </div>
                            <input
                              type="file"
                              class="form-control"
                              id="dp"
                              onChange={(e) => {
                                setDisplayPicture(e.target.files[0]);
                              }}
                            />
                            {userDetails.displayPicture ? (
                              <p>
                                {userDetails.displayPicture.substr(
                                  45,
                                  userDetails.displayPicture.length
                                )}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      )}
                    </div>
                    {isRestaurant === "true" ? null : (
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div style={{ textAlign: "right" }}>
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              class="btn btn-primary"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, { getUserDetailsFunc, updateUserFunc })(
  UserProfile
);
