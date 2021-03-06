import React from "react";
import TodoItem from "../todoItem/TodoItem";

const Todos = (props) => {
  const todoslist = props.todos.map((todo, index) => (
    <TodoItem
      key={todo.id}
      text={todo.text}
      id={todo.id}
      isComplete={todo.isComplete}
      handleComplete={props.handleComplete}
      handleDelete={props.handleDelete}
    />
  ));
  return (
    <div className="todo-content">
      <ol>{todoslist}</ol>
    </div>
  );
};

export default Todos;
