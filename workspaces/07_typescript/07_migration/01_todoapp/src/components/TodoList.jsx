import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
}

export default TodoList;