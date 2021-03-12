const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");
// parse application  x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())


const PORT = process.env.PORT || 3000;

var toDoArray = [
  { id: 1, description: "Call mom", isComplete: false },
  { id: 2, description: "Buy groceries", isComplete: false },
  { id: 3, description: "Go to movies ", isComplete: false },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Read data
app.get("/todos", (req, res) => {
  res.json(toDoArray);
});

let count = 4; 

// Create data
app.post("/todos", (req, res) => {
  // array of hard-coded data for testing purposes
  // ANYTIME USING POST REQUEST FROM INPUT - REFFERED AS BODY
  // BODY-PARSER IS USED TO PARSE DATA - REQ.BODY
  let newTodo = {
    id: count++,
    description: req.body.description,
    isComplete: false,
  };

  // append noew todo object to toDoArray
  toDoArray.push(newTodo);
  // set status to 201 which is successful
  // send back json version of newTodo object
  // no need to send whole array, just new todo item
  res.status(201).json(newTodo);
});

app.delete("/todos/:todoid", (req, res) => {
  // Get the requested todoid from req.params
  var reqestedToDoID = parseInt(req.params.todoid);

  // Find index of requested todo
  // findIndex function loops over toDoArray
  var requestedToDoIndex = toDoArray.findIndex((todo) => {
    return todo.id === reqestedToDoID;
  });

  // remove the requestedToDo from toDoArray
  toDoArray.splice(requestedToDoIndex, 1);

  // send the toDoArray as a confirmation
  res.send(toDoArray);
});

app.put("/todos/:todoid", (req, res) => {
  let requestedToDoId = parseInt(req.params.todoid);

  // find the todo in the array that matches the todoId passed in
  var requestedToDo = toDoArray.find((todo) => {
    return todo.id === requestedToDoId;
  });

  if(requestedToDo != undefined){
    //toggle completion status
    requestedToDo.isComplete = !requestedToDo.isComplete;
    res.status(200).send(requestedToDo);
  } else {
    res.status(666).send(`Id does not exist to update`)
  }

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
