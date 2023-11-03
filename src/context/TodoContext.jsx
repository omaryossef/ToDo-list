import { createContext, useState } from "react";
const TodoListCotext = createContext();

const TodoListProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    todo: "",
    start: "",
    end: "",
    completed: false,
  });
  const addToDo = (newTodo) => setTodo(newTodo);
  return (
    <TodoListCotext.Provider value={{ todo, setTodo, addToDo }}>
      {children}
    </TodoListCotext.Provider>
  );
};

export { TodoListProvider, TodoListCotext };
