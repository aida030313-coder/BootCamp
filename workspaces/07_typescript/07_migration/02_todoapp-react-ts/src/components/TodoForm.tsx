import { useState } from "react";

interface TodoFormProps {
    addTodo: (title: string) => void;
}

// 할 일을 추가시키는 함수를 전달받아야함
function TodoForm({ addTodo }: TodoFormProps) {

    const [value, setValue] = useState<string>('');

    // 폼과 관련된 이벤트 객체, HTML에 Form 요소에서 발생하는 이벤트 객체
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value); // 새 Todo 추가 기능
        setValue('');   // 입력값 초기화
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    )
}

export default TodoForm
