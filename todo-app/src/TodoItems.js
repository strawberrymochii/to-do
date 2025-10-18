import React, {useState} from 'react';
function TodoItems({ todo, deleteTodo, showCompleted, editTodo}) {
    function handleChange() {
        showCompleted(todo.id);
    }

    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <div className={todo.completed ? "strike" : ""}
            onDoubleClick={() => {
                if (!todo.completed) {
                    setEdit(true);
                }
            }}
            >
                {edit ? (
                    <input
                    type = "text"
                    value={editText}
                    onChange={(e) => 
                        {setEditText(e.target.value);
                    }}
                    onBlur={() => {
                        setEdit(false);
                        editTodo(todo.id, editText);
                    }}
                    />
                ) : (
                    text
                )}
            </div>
            <p>{todo.text}</p>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={() => editTodo(todo.id, )}>Edit</button>

        </div>
    );
}

export default TodoItems;