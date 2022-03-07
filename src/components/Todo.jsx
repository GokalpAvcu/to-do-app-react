import React from "react";
import clsx from "clsx";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useTodoLayerValue } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);

  const removeTodo = (todoId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  };

  const completeTodo = (todoId) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
  };

  const todoStyle = clsx({
    ["todo-row"]: true,
    ["completed"]: todo.isCompleted,
  });

  return (
    <>
      <div className={todoStyle}>
        <div onClick={() => completeTodo(todo.id)}>
          {
            editable ?
            <input type="text" value={} onChange=(event => {}) />;
            {todo.content}
             

          }

        </div>

        <div className="todo-icons">
          <GrFormClose
            className="todo-icon"
            onClick={() => removeTodo(todo.id)}
          />
          <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />
          <GrFormCheckmark className="todo-icon" />
        </div>
      </div>
    </>
  );
  }

export default Todo;
