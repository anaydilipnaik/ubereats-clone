var assert = require("assert");
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:5001");

//Unit Test begin
describe("MochaTest", function () {
  // //User Login
  it("user should login", function (done) {
    server
      .post("/loginUser")
      .send({
        email: "mranaynaik@gmail.com",
        password: "test@123",
      })
      .expect(200)
      .end(function (err, res) {
        console.log("Status: ", res.status);
        res.status.should.equal(200);
        done();
      });
  });
  //restaurant Login
  it("restaurant should login", function (done) {
    server
      .post("/loginRestaurant")
      .send({
        email: "paradise@gmail.com",
        password: "test@123",
      })
      .expect(200)
      .end(function (err, res) {
        console.log("Status: ", res.status);
        res.status.should.equal(200);
        done();
      });
  });
  //dish categories
  it("should fetch dish categories", function (done) {
    server
      .get("/dishes/category")
      .expect(200)
      .end(function (err, res) {
        console.log("Status: ", res.status);
        res.status.should.equal(200);
        done();
      });
  });
  //get user addresses
  it("should fetch user addresses", function (done) {
    server
      .get("/addresses/get/61848d386cb62106b221dab7")
      .expect(200)
      .end(function (err, res) {
        console.log("Status: ", res.status);
        res.status.should.equal(200);
        done();
      });
  });
  //get user favourites
  it("should fetch user favourites", function (done) {
    server
      .get("/favourites/61848d386cb62106b221dab7")
      .expect(200)
      .end(function (err, res) {
        console.log("Status: ", res.status);
        res.status.should.equal(200);
        done();
      });
  });
});
