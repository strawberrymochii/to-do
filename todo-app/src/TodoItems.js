import React, {useState} from 'react';
function TodoItems({ todo, deleteTodo, showCompleted, editTodo}) {

    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    function handleChange() {
        showCompleted(todo.id);
    }

    function handleEdit() {
        setEditing(true);
    }

    function handleSave() {
        if (newText.trim() === '') return;
        editTodo(todo.id, newText);
        setEditing(false);
    }

    function handleCancel() {
        setNewText(todo.text);
        setEditing(false);
    }

    return (
        <div className="todo-item">
            <div className="container">

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />

            {editing ? (
                <>
                        <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        />
                </>
                
            ) : (
            <>
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
                </span>
            </>
            )}
            </div>
            
            <div className="buttons">

            {editing ? (
                <>
                        
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>X</button>
                </>
            )}  

            </div>


        </div>
    );
}

export default TodoItems;