import React, { Component } from 'react';
import './App.css';

// Components 
import TodoHeader from './components/todoHeader/TodoHeader'
import TodoInput from './components/todoInput/TodoInput'
import Todos from './components/todos/Todos'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor fired')
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = event => {
    console.log('handleChange fired')
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit fired')
    const todos = [...this.state.todos, {
      id: Date.now(),
      text: this.state.newTodo,
      isComplete: false
    }];
    // this.setState({todos, newTodo: ''});
    this.setState((prevState, props) => {
      console.log('setState fired')
      return({
        todos: todos,
        newTodo: ''
      })
    });
  }

  componentDidMount = () => {
    console.log('componentDidMount fired')
    // by setting up interval, i make sure this currentTime gets updated
    this.timerID = setInterval(() => {
      this.setState({currentTime: new Date()})
    }, 1000);

    fetch('https://protected-mesa-11167.herokuapp.com/todos')
    .then(res => res.json())
    .then(data => {
      this.setState(state => (
        {todos: data} 
      ))
    })
  }

  UNSAFE_componentWillMount = () => {
    console.log('componentWillMount fired')
    // first time the component mounts it shall have a local time 
    this.setState({ currentTime: new Date()});
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate fired')
  }

  componentWillUnmount = () => {
    // clear out the interval for currentTime
    clearInterval(this.timerID)
    console.log('componentWillUnmount fired')
  }

  handleComplete = id => {
    console.log('handleComplete fired')
    this.setState(function(cloneOfState){
      let indexOfTodo = cloneOfState.todos.findIndex(todo => {
        return todo.id === id
      })
      
      let foundTodo = cloneOfState.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete;
      return cloneOfState
    })
  }

  handleDelete = (id, event) => {
    event.stopPropagation()
    this.setState(cloneOfState => {
      // filter through current todos and return everything that is not equal 
      // to id
      let newTodos = cloneOfState.todos.filter(todo => {
        return todo.id !== id
      })
      return {...cloneOfState, todos: newTodos}
    })
  }

  render(){
    console.log('render fired')
    return (
      <div className="App" id="container">
        <TodoHeader />
        <TodoInput 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
        />
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;
