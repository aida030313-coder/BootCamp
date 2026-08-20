import React, { useState } from 'react'

function num1_ToDo() {

    const [inputValue, setInputValue] = useState('');
    const [Todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            checked: false
        }

        setTodos([
            ...Todos,
            newTodo
        ]);

        setInputValue('');
    };

    const handleCheckbox = (id) => {
        
        setTodos(Todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
    };

    const handleDelelte = (id) => {
        setTodos(Todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h2>할일 목록</h2>
            <input
                type="text"
                placeholder='새 할일'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>추가</button>

            <div>
                {Todos.map((todo, index) => (
                    <div key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => handleCheckbox(todo.id)}
                        />
                        <span style={{
                            textDecoration: todo.checked ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                            <button onClick={() => handleDelelte(todo.id)}>삭제</button>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default num1_ToDo
