const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;

// NOTE: HOW TO CONVERT O MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect
const mongoose = require("mongoose");
const db = "jp_todo_list";
const url = `mongodb://localhost:27017/${db}`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${db} database.`))
  .catch((error) =>
    console.log(`Error connecting to ${db} database: ${error}`)
  );

// 2) Build blueprints
//    a) Schema
//    b) model
let todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Must have a description."],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

let TodoModel = mongoose.model("todos", todoSchema);

// 3) build queries
//    a) Read -> .find()
//    b) Create -> .create() or .save()
//    c) Delete -> .findbyIdAndDelete()
//    d) Update -> .findById() and .save()

app.get("/", function (req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function (req, res) {
  TodoModel.find({}, (error, results) => {
    error
      ? console.log(`Error finding documents from db: ${error}`)
      : res.status(220).json(results);
    console.log(`My results: ${results}`);
  });
});

// Create data
app.post("/todos", function (req, res) {
  let newTodo = new TodoModel({
    description: req.body.description,
  });

  newTodo.save((error, results) => {
    if (error) {
      console.log(`Error save to db ${error}`);
    } else {
      res.status(201).json(newTodo);
    }
  });
});

// Delete data
app.delete("/todos/:id", (req, res) => {
  // get the requestedToDoId from req.params and ensure it is a number
  let requestedToDoId = req.params.id;
  console.log(requestedToDoId);

  if (requestedToDoId) {
    TodoModel.findByIdAndDelete(requestedToDoId, (err, todo) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Deteled: ${todo}`);
        res.status(201).send(todo);
      }
    });
  } else {
    res.status(401).send({ msg: "No id exists" });
  }
});

// Update
app.put("/todos/:id", (req, res) => {
  // get the requestedToDoId from req.params and ensure it is a number
  let requestedToDoId = req.params.id;

  // SPECS:
  // need to find the document that mathces the id
  // once we find it, need to flip the isComplete
  // then .save()
  // MUST be updated in database

  TodoModel.findById(requestedToDoId, (err, todo) => {
    if (err) {
      res.status(666).send("Id does not exist for updating");
    } else {
      console.log(todo);
      todo.isComplete = !todo.isComplete;
      todo.save((err, updatedTodo) => {
        if (err) {
          res.status(667).send("Cannot update doc");
        } else {
          res.status(202).send(todo);
        }
      });
    }
  });

  // find the affected todo item
  // let requestedToDo = toDoArray.find(function (todo) {
  //   return todo.id === requestedToDoId;
  // });

  // if (requestedToDo !== undefined) {
  //   // toggle the completion status
  //   requestedToDo.isComplete = !requestedToDo.isComplete;

  //   // return the toggled todo as confirmation only
  //   // data not needed for anything
  //   res.status(202).send(requestedToDo);
  // } else {
  //   // if no element is found, let front end know
  //   res.status(666).send("Id does not exist for updating");
  // }
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
