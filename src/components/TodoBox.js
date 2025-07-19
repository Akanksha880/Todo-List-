import React from "react";
import "./TodoBox.css";

function TodoBox() {
  return (
    <div className="todo-box">
      <input type="text" placeholder="Add a new task..." />
    </div>
  );
}

export default TodoBox;
