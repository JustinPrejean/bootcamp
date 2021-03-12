import React from "react";

const TodoInput = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <input
        className="todo-input"
        type="text"
        name="newTodo"
        autoComplete="off"
        placeholder="What needs to be done?"
        onChange={props.handleChange}
        value={props.newTodo}
      />
      <button type="submit" className="save-button">
        SAVE
      </button>
    </form>
  );
};

export default TodoInput;
