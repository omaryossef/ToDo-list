import { useContext, useEffect, useState } from "react";
import { TodoListCotext } from "../context/TodoContext";
import "./todoForm.css";
import "./form.css";

function TodoForm() {
  const { todos, setTodo, addToDo } = useContext(TodoListCotext);
  const [newTodo, setNewTodo] = useState();
  const saveTodoLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handelSubmited = (e) => {
    e.preventDefault();
    const MyForm = new FormData(e.target);
    const todo = MyForm.get("todo");
    const start = MyForm.get("start");
    const end = MyForm.get("end");
    const day = MyForm.get("day");
    if (todo !== "" && day !== "" && start !== "" && end !== "") {
      const newTodo = {
        todo: todo,
        day: day,
        start: start,
        end: end,
        completed: false,
        submit: true,
      };
      addToDo(newTodo);
      saveTodoLocalStorage([...todos, newTodo]);
      setNewTodo({});
    }
  };
  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todos"));
    if (getTodo) {
      setTodo(getTodo);
    }
  }, [setTodo]);
  const checkBoxChange = (todoName) => {
    const updateTodo = todos.map((todo) => {
      if (todo.todo === todoName) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodo(updateTodo);
    saveTodoLocalStorage(updateTodo);
  };
  return (
    <>
      <div>
        <form onSubmit={handelSubmited}>
          <label htmlFor="todo">Todo: </label>
          <input className="todo-input" type="text" name="todo" />
          <label htmlFor="day">Todo: </label>
          <input className="todo-input" type="date" name="day" />
          <br />
          <label htmlFor="start">Von: </label>
          <input className="todo-input" type="time" name="start" />
          <br />
          <label htmlFor="end">Bis</label>
          <input type="time" name="end" className="todo-input" />
          <input type="submit" />
        </form>
      </div>

      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th scope="col">Todo</th>
              <th scope="col">day</th>
              <th scope="col">von</th>
              <th scope="col">bis</th>
              <th scope="col">completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr
                className="active-row"
                key={index}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "red" : "",
                }}
              >
                <td>{todo.todo}</td>
                <td>{todo.day}</td>
                <td>{todo.start}</td>
                <td>{todo.end}</td>
                {
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => checkBoxChange(todo.todo)}
                    />
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoForm;
