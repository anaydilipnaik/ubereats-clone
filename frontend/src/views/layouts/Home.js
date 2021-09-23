import React from "react";
import UberEatsLogo from "../../assets/ubereats_logo.svg";

const Home = () => {
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
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      {/* <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row justify-content-center mb-3">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg"
                          class="w-100"
                        />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>Quant trident shirts</h5>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>310</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Best finish
                          <br />
                        </span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For men</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Casual
                          <br />
                        </span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">$13.99</h4>
                        <span class="text-danger">
                          <s>$20.99</s>
                        </span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button class="btn btn-primary btn-sm" type="button">
                          Details
                        </button>
                        <button
                          class="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(4).jpg"
                          class="w-100"
                        />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>Quant olap shirts</h5>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>289</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Best finish
                          <br />
                        </span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For men</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Casual
                          <br />
                        </span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">$14.99</h4>
                        <span class="text-danger">
                          <s>$21.99</s>
                        </span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button class="btn btn-primary btn-sm" type="button">
                          Details
                        </button>
                        <button
                          class="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(5).jpg"
                          class="w-100"
                        />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>Quant ruybi shirts</h5>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <span>145</span>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span class="text-primary"> • </span>
                        <span>Light weight</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Best finish
                          <br />
                        </span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span class="text-primary"> • </span>
                        <span>For women</span>
                        <span class="text-primary"> • </span>
                        <span>
                          Casual
                          <br />
                        </span>
                      </div>
                      <p class="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">$17.99</h4>
                        <span class="text-danger">
                          <s>$25.99</s>
                        </span>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button class="btn btn-primary btn-sm" type="button">
                          Details
                        </button>
                        <button
                          class="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* test start */}
      <section class="vh-100" style={{ backgroundColor: "#35558a" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100 text-center">
            <div class="col">
              <button
                type="button"
                class="btn btn-light btn-lg"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
              >
                <i class="fas fa-info me-2"></i> Get information
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start text-black p-4">
                      <h5
                        class="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                        Johnatan Miller
                      </h5>
                      <h4 class="mb-5" style={{ color: "#35558a" }}>
                        Thanks for your order
                      </h4>
                      <p class="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        class="mt-2 mb-4"
                        style={{
                          height: 0,
                          backgroundColor: "transparent",
                          opacity: 0.75,
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                      <div class="d-flex justify-content-between">
                        <p class="fw-bold mb-0">Ether Chair(Qty:1)</p>
                        <p class="text-muted mb-0">$1750.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="small mb-0">Shipping</p>
                        <p class="small mb-0">$175.00</p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <p class="small">Tax</p>
                        <p class="small">$200.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="fw-bold">Total</p>
                        <p class="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
                      <button
                        type="button"
                        class="btn btn-primary btn-lg mb-1"
                        style={{ backgroundColor: "#35558a" }}
                      >
                        Track your order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* test end */}
    </>
  );
};

export default Home;
