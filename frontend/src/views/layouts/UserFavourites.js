import React from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";

const UserFavourites = () => {
  return (
    <>
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

export default UserFavourites;
