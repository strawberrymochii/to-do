import React, { useState } from 'react';
import TodoItem from './TodoItems';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'new task', completed: false },
    ]);

    const [text, setText] = useState('');
    if (text){
        
    }
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


function editTodo(id, newText) {
    const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return {...todo, text : newText};
        }
        return todo;
    });

    setTodos(updatedTodos);
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
    <div className="header"><h1>To-do List</h1></div>

    {todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        showCompleted={showCompleted}
        editTodo={editTodo}
        />

    ))}
    
    <div className="input">
        <input
    type="text"
    placeholder="Add new todo"
    value={text}
    onChange={e => setText(e.target.value)}
    />
    
    <button onClick={() => addTodo(text)}>Add todo</button>
    </div>
</div>
);
}

export default TodoList;