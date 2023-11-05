import { createContext, useState } from "react";
const TodoListCotext = createContext();

const TodoListProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);
  const addToDo = (newTodo) => setTodo([...todos, newTodo]);
  return (
    <TodoListCotext.Provider value={{ todos, setTodo, addToDo }}>
      {children}
    </TodoListCotext.Provider>
  );
};

export { TodoListProvider, TodoListCotext };
