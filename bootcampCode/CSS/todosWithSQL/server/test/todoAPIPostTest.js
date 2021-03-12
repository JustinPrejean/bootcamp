// import the server
var app = require("../server");

// import an assertion
// assert => say or do something
// test => test its validity
var supertest = require("supertest");

// write the test
describe(`2. Posts requests from Todo API`, function () {
  // invoke our first test
  it("2.1 should return HTTP status of 200 and JSON data", function (done) {
    let newTodo = {
      description: `complete unit tests abracadbra`,
      isComplete: false,
    };
    supertest(app)
      .post("/todos")
      .set("Accept", "application/json")
      .send(newTodo)
      .expect(201)
      .expect(/abracadbra/i, done);
  });
});
