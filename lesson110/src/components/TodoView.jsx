import React from 'react';
import { Link } from 'react-router';

function TodoView({ todo, markTodo, deleteTodo }) {
  const { tid, uname, done, content } = todo;
  return (
    <div className="todo-view">
      <span>
        <input type="checkbox" checked={done} onClick={() => markTodo(tid)} />
      </span>
      <span title={uname}>{uname}</span>
      <span title={content}>{content}</span>
      <span>
        <button onClick={() => deleteTodo(tid)}>x</button>
      </span>
    </div>
  );
}

export default TodoView;
