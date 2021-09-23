import React from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";

const UserHome = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            <img src={UberEatsLogo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
              </li>
            </ul>
            <div class="container" style={{ textAlign: "right" }}>
              <div class="input-box " style={{ width: "400px" }}>
                <input type="text" class="form-control" />{" "}
                <i class="fa fa-search"></i>
              </div>
            </div>
            <button
              class="btn btn-outline-dark rounded-pill"
              style={{ width: 170, height: 40 }}
            >
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
            <button
              class="rounded-pill"
              style={{ marginLeft: "25px", width: 150, height: 40 }}
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* bestsellers listing */}
      <section style={{ backgroundColor: "#eee" }}>
        <div class="text-center container py-5">
          <h4 class="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-success ms-2">Eco</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(23).jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-success ms-2">Eco</span>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(17).jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100"></div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-primary ms-2">New</span>
                          <span class="badge bg-success ms-2">Eco</span>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
};

export default UserHome;
