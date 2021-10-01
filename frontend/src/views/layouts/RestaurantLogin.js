import React, { Component } from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";
import UberEatsLoginImage from "../../assets/ubereats_login_logo.jpeg";
import { connect } from "react-redux";
import { loginRestaurantFunc } from "../../redux/actions";

class RestaurantLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.email = this.state.email;
    data.password = this.state.password;
    this.props.loginRestaurantFunc(data);
  };

  render() {
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
                        style={{
                          borderRadius: "1rem 0 0 1rem",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={this.handleSubmit}>
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
                            Sign into your{" "}
                            <b style={{ textDecoration: "underline" }}>
                              Restaurant
                            </b>{" "}
                            account
                          </h5>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              onChange={(event) => {
                                this.setState({ email: event.target.value });
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
                                this.setState({ password: event.target.value });
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
                              {this.props.restaurant && this.props.restaurant.id
                                ? "Please wait.."
                                : "Login"}
                            </button>
                            {this.props.error ? (
                              <p
                                style={{
                                  color: "red",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Login failed! Please try again</b>
                              </p>
                            ) : this.props.restaurant &&
                              this.props.restaurant.id ? (
                              <p
                                style={{
                                  color: "green",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Success! Redirecting..</b>
                              </p>
                            ) : null}
                          </div>
                          <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            Don't have an account?{" "}
                            <a
                              href="/restaurantregister"
                              style={{ color: "#393f81" }}
                            >
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
  }
}

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
  error: state.login.error,
});

export default connect(mapStateToProps, { loginRestaurantFunc })(
  RestaurantLogin
);
