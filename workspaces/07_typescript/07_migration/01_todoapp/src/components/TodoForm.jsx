import React, { useState } from 'react';

function TodoForm({ addTodo }) {

    const [value, setValue] = useState('');

    // 제출 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value); // 새 Todo 추가 기능
        setValue('');   // 입력값 초기화
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Add new todo..."
            />
            <button type="submit">추가</button>
        </form>
    );
}

export default TodoForm;