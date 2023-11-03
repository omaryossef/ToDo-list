import { useContext, useState } from "react";
import { TodoListCotext } from "../context/TodoContext";
function TodoForm() {
  const { todo, setTodo, addToDo } = useContext(TodoListCotext);
  const [newTodo, setNewTodo] = useState({});
  const handelSubmited = (e) => {
    e.preventDefault();
    const MyForm = new FormData(e.target);
    const todo = MyForm.get("todo");
    const start = MyForm.get("start");
    const end = MyForm.get("end");
    const newTodo = { todo, start, end, completed: false };
    console.log(newTodo);
    addToDo(newTodo);
    console.log(newTodo);
    setNewTodo({});
    return newTodo;
  };
  return (
    <div>
      <form onSubmit={handelSubmited}>
        <label htmlFor="todo">Todo: </label>
        <input className="todo-input" type="text" name="todo" />
        <br />
        <label htmlFor="start">Von: </label>
        <input className="todo-input" type="date" name="start" />
        <br />
        <label htmlFor="end">Bis</label>
        <input type="date" name="end" />
        <input type="submit" />
      </form>
     
    </div>
  );
}

export default TodoForm;
