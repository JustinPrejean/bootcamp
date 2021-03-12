import React, { Component } from "react";
import "./App.css";

//Components
import TodoHeader from "./components/todoHeader/TodoHeader";
import TodoInput from "./components/todoInput/TodoInput";
import Todos from "./components/todos/Todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const todos = [
      ...this.state.todos,
      {
        id: Date.now(),
        text: this.state.newTodo,
        isComplete: false,
      },
    ];
    this.setState({ todos, newTodo: "" });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleComplete = (id) => {
    this.setState((copyOfState) => {
      let indexOfTodo = this.state.todos.findIndex((todo) => {
        return todo.id == parseInt(id);
      });
      let foundTodo = this.state.todos[indexOfTodo];
      foundTodo.isComplete = !foundTodo.isComplete;
      return copyOfState;
    });
  };

  handleDelete = (id) => {
    this.setState((cloneOfState) => {
      // filter through current todos and return everything not equal to id
      let newTodos = cloneOfState.todos.filter((todo) => {
        return todo.id != id;
      });
      return { ...cloneOfState, todos: newTodos };
    });
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoInput
          handleSubmit={this.handleSubmit} // this is a prop
          handleChange={this.handleChange} // this is also a prop
          newTodo={this.state.newTodo} // again, a prop
        />
        <div className="todo-content"></div>
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
