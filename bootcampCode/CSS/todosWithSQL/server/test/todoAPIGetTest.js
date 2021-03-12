// import the server
var app = require("../server");

// import an assertion
// assert => say or do something
// test => test its validity
var supertest = require("supertest");

// write the test
describe(`1. GET requests from Todo API`, function () {
  // invoke our first test
  it("1.1 should return HTTP status of 200 and JSON data", function (done) {
    supertest(app)
      .get("/todos")
      .expect("Content-Type", /json/i)
      .expect(201, done);
  });
});
