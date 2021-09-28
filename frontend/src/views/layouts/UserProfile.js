import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { countryList } from "../../utils/countries";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const UserProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [displayPicture, setDisplayPicture] = useState(null);

  const onUpdateProfile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("myFile", displayPicture);
    axios.put("http://localhost:5000/updateUser/3", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Header />
      <form onSubmit={onUpdateProfile}>
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 class="user-name">Yuki Hayashi</h5>
                      <h6 class="user-email">yuki@Maxwell.com</h6>
                    </div>
                    <div class="about">
                      <h5>About</h5>
                      <p>
                        I'm Yuki. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
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
                            />
                          </div>
                          <div class="col-4">
                            <label for="fullName">Middle Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="fullName"
                              placeholder="Enter middle name"
                            />
                          </div>
                          <div class="col-4">
                            <label for="fullName">Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="fullName"
                              placeholder="Enter last name"
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
                        <DatePicker
                          selected={startDate}
                          class="form-control"
                          style={{ width: "100%" }}
                          onChange={(date) => setStartDate(date)}
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
                        />
                      </div>
                    </div>
                    <div
                      class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="form-group">
                        <label for="country">Country</label>
                        <select class="form-control">
                          <option>Select a country</option>
                          {countryList &&
                            countryList.map((country) => (
                              <option value={country.name}>
                                {country.name}
                              </option>
                            ))}
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
                        />
                      </div>
                    </div>
                    <div
                      class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="form-group">
                        <label for="dp">Upload profile picture</label>
                        <input
                          type="file"
                          class="form-control"
                          id="dp"
                          onChange={(e) => {
                            setDisplayPicture(e.target.files[0]);
                          }}
                        />
                      </div>
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default UserProfile;
