import type { Todo } from '../types'
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
}

// 할 일 목록 전달 받아야함
function TodoList({ todos, toggleComplete }: TodoListProps) {
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

export default TodoList
