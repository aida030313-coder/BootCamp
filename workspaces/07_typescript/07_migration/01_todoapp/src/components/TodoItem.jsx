import React from 'react';

function TodoItem({ todo, toggleComplete }) {

  const handleClick = () => {
    toggleComplete(todo.id);
  };

  const itemStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    cursor: 'pointer',
    margin: '5px 0'
  };

  return (
    <li style={itemStyle} onClick={handleClick}>
      {todo.title}
    </li>
  );
}

export default TodoItem;