import React from 'react';
function TodoItems({ todo, deleteTodo, showCompleted }) {
    function handleChange() {
        showCompleted(todo.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
                // <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}></span>
            />
            <p>{todo.text}</p>
            <button onClick={() => deleteTodo(todo.id)}>X</button>

        </div>
    );
}

export default TodoItems;