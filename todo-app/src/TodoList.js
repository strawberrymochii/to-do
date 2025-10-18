import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build Todo app', completed: true}
    ]);

    const [text, setText] = useState('');
    function addTodo(text) {
        const newTodo = {
        id: Date.now(),
        text, 
        completed: false
    };
    setTodos([...todos, newTodo]);
    setText('');
    }


function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
}

function showCompleted(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
            return {...todo, completed: !todo.completed};
        }
        else {
            return todo;
        }
    }));
}

return (
<div className="todo-list">
    {todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        showCompleted={showCompleted}/>
    ))}
    <input
    type="text"
    value="text"
    onChange={e => setText(e.target.value)}
    />
    <button onClick={() => addTodo(text)}>Add todo</button>
</div>
);
}

export default TodoList;