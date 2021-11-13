import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUserFunc } from "../../redux/actions";

class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      middleName: null,
      lastName: null,
      email: null,
      password: null,
      location: null,
      passwordMatch: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === this.state.password)
      this.setState({ passwordMatch: "y" });
    else this.setState({ passwordMatch: "n" });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.firstName = this.state.firstName;
    if (this.state.middleName) data.middleName = this.state.middleName;
    data.lastName = this.state.lastName;
    data.email = this.state.email;
    data.password = this.state.password;
    data.city = this.state.location;
    this.props.registerUserFunc(data);
  };

  render() {
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
                      <form onSubmit={this.handleSubmit}>
                        <div class="row mb-4">
                          <div class="col-4">
                            <input
                              type="text"
                              id="form3Example1cg"
                              onChange={(event) => {
                                this.setState({
                                  firstName: event.target.value,
                                });
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
                                this.setState({
                                  middleName: event.target.value,
                                });
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
                                this.setState({
                                  lastName: event.target.value,
                                });
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
                              this.setState({
                                email: event.target.value,
                              });
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
                              this.setState({
                                password: event.target.value,
                              });
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
                            onChange={this.handleChange}
                            required
                          />
                          <label class="form-label" for="form3Example4cdg">
                            Re-enter your password *
                          </label>
                        </div>

                        {this.state.passwordMatch === "y" ? (
                          <p style={{ color: "green" }}>Passwords Match!</p>
                        ) : this.state.passwordMatch === "n" ? (
                          <p style={{ color: "red" }}>Passwords Mismatch!</p>
                        ) : null}

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example4cdg"
                            class="form-control form-control-lg"
                            onChange={(event) => {
                              this.setState({
                                location: event.target.value,
                              });
                            }}
                            required
                          />
                          <label class="form-label" for="form3Example4cdg">
                            Location *
                          </label>
                        </div>

                        <div class="d-flex justify-content-center">
                          <button
                            type="submit"
                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            disabled={
                              this.state.passwordMatch === "y" ? false : true
                            }
                          >
                            Register
                          </button>
                        </div>

                        {this.props.success && !this.props.error ? (
                          <p style={{ color: "green", marginTop: "15px" }}>
                            Success! Redirecting..
                          </p>
                        ) : !this.props.success && this.props.error ? (
                          <p style={{ color: "red", marginTop: "15px" }}>
                            Something went wrong. Please try again
                          </p>
                        ) : null}

                        <p class="text-center text-muted mt-5 mb-0">
                          Already use Uber?{" "}
                          <a href="/userlogin" class="fw-bold text-body">
                            <u>Sign in</u>
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
  }
}

const mapStateToProps = (state) => ({
  error: state.register.error,
  success: state.register.success,
});

export default connect(mapStateToProps, { registerUserFunc })(UserRegister);
