import React, { useState } from "react";
import { registerUser } from "../../controllers/register";

const UserRegister = () => {
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [location, setLocation] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === password) setPasswordMatch("y");
    else setPasswordMatch("n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.first_name = firstName;
    if (middleName) data.middle_name = middleName;
    data.last_name = lastName;
    data.email = email;
    data.password = password;
    data.city = location;
    registerUser(data)
      .then((data) => {
        if (data.status === 200) window.location.href = "/userlogin";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section
        class="vh-100 bg-image"
        style={{
          backgroundColor: "#9A616D",
        }}
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div class="row mb-4">
                        <div class="col-4">
                          <input
                            type="text"
                            id="form3Example1cg"
                            onChange={(event) => {
                              setFirstName(event.target.value);
                            }}
                            class="form-control form-control-lg"
                            required
                          />
                          <label class="form-label" for="form3Example1cg">
                            First Name *
                          </label>
                        </div>
                        <div class="col-4">
                          <input
                            type="text"
                            id="form3Example1cg"
                            onChange={(event) => {
                              setMiddleName(event.target.value);
                            }}
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Example1cg">
                            Middle Name
                          </label>
                        </div>
                        <div class="col-4">
                          <input
                            type="text"
                            id="form3Example1cg"
                            class="form-control form-control-lg"
                            onChange={(event) => {
                              setLastName(event.target.value);
                            }}
                            required
                          />
                          <label class="form-label" for="form3Example1cg">
                            Last Name *
                          </label>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          required
                        />
                        <label class="form-label" for="form3Example3cg">
                          Email *
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          required
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password *
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                          onChange={handleChange}
                          required
                        />
                        <label class="form-label" for="form3Example4cdg">
                          Re-enter your password *
                        </label>
                      </div>

                      {passwordMatch === "y" ? (
                        <p style={{ color: "green" }}>Passwords Match!</p>
                      ) : passwordMatch === "n" ? (
                        <p style={{ color: "red" }}>Passwords Mismatch!</p>
                      ) : null}

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                          onChange={(event) => {
                            setLocation(event.target.value);
                          }}
                        />
                        <label class="form-label" for="form3Example4cdg">
                          Location *
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          disabled={passwordMatch === "y" ? false : true}
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/userlogin" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserRegister;
