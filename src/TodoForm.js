import "./TodoForm.css";
import {useState} from "react";
function TodoForm({onAdd}){
    const [text, setText] = useState("");
return (
    <form
        className="todoAppForm"
        onSubmit={(e) => {
            if(text !== "") {
                e.preventDefault();
                onAdd(text);
                setText("");
            } else {
                alert("The input data is empty")
            }
    }}>
        <input className="todoInput"
            type="text" value={text} onChange ={(e) => {
            setText(e.target.value)
        }} />
        <button className="todoAppAddButton">Add</button>
    </form>
)
}
export default TodoForm;
