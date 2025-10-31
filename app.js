const express = require('express');


const app = express();
const PORT = 3000;


// hello world example
app.get('/', (req, res) => {
    res.send('Hello, world!');
})  


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// import React, {useState} from 'react';


// const Item = ({
    
//     text,
//     completed,
//     id,
//     showCompleted,
//     deleteTodo,
//     editTodo
// }) => {
//     const [edit, setEdit] = useState(false);
//     const [editText, setEditText] = useState(text);

//     return (
//         <div className="todo-item">
//             <div class="checkbox">
//                 <input
//                     type="checkbox"
//                     checked={completed}
//                     onChange={() => showCompleted(id)}
//                 />
//             </div>
//             <div className={completed ? "strike" : ""}
//                 onDoubleClick={() => {
//                     if (!completed) {
//                         setEdit(true);
//                     }
//                 }} 
//             >
//                 {edit ? (
//                     <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => {setEditText(e.target.value);
//                     }}
//                     onBlur={() => {
//                         setEdit(false);
//                         editTodo(id, editText);
//                     }}
//                 />
//                 ) : (
//                     text
//                 )}
//             </div>
//             <div class="delete-button">
//                 <button onClick={() => deleteTodo(id)}>X</button>
//             </div>
//         </div>
//     );
// };