import { createContext, useState } from "react";
const TodoListCotext = createContext();

const TodoListProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);
  const addToDo = (newTodo) => setTodo([...todos, newTodo]);
  const removeTodo = (todoId) => {
    const removedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodo(removedTodo);
    localStorage.clear();
  };
  return (
    <TodoListCotext.Provider value={{ todos, setTodo, addToDo, removeTodo }}>
      {children}
    </TodoListCotext.Provider>
  );
};

export { TodoListProvider, TodoListCotext };
