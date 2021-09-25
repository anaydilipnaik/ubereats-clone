import React, { useState } from "react";
import { loginUser } from "../../controllers/login";
import UberEatsLogo from "../../assets/ubereats_logo.svg";
import UberEatsLoginImage from "../../assets/ubereats_login_logo.jpeg";

const UserLogin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    console.log("here");
    event.preventDefault();
    let data = {};
    data.email = email;
    data.password = password;
    loginUser(data)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("Invalid credentials!");
      });
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={UberEatsLoginImage}
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span class="h1 fw-bold mb-0">
                            <img src={UberEatsLogo} />
                          </span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            class="form-control form-control-lg"
                            required
                          />
                          <label class="form-label" for="form2Example17">
                            Email address *
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            class="form-control form-control-lg"
                            required
                          />
                          <label class="form-label" for="form2Example27">
                            Password *
                          </label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                          {status ? status : null}
                        </div>

                        <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="/userregister" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
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

export default UserLogin;
