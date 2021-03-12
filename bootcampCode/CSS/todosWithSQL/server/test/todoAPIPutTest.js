// import the server
var app = require("../server");

// import an assertion
// assert => say or do something
// test => test its validity
var supertest = require("supertest");

// write the test
describe(`3. Put requests from Todo API`, function () {
  // invoke our first test
  it("3.1 should return HTTP status of 200 and JSON data", function () {
    let newTodo = {
      description: `complete unit tests abracadbraaaa`,
      isComplete: false,
    };
    supertest(app)
      .post("/todos")
      .set("Accept", "application/json")
      .send(newTodo)
      .expect(201)
      .expect(/abracadbra/i)
      .end(function (err, results) {
        supertest(app)
          .put(`/todos/` + results.body._id)
          .expect(200)
          .expect({
            description: newTodo.description,
            id: results.body._id,
            iscomplete: !newTodo.isComplete,
            user_id: 2,
          })
          .end(function () {
            console.log("test complete successfully");
          });
      });
  });
});
