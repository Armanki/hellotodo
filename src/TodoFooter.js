import "./TodoFooter.css";


function TodoFooter({todos, onClearCompleted}){
   const completedSize = todos.filter((todo) => todo.isCompleted).length
    return (
        <div className="todoAppFooter">
            <span>{completedSize}/{todos.length} completed</span>
            <button
                className="todoClearCompleted"
                onClick={onClearCompleted}>Clear completed</button>
        </div>
    )

}

export default TodoFooter;