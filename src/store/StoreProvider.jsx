import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [tasksToDo, setTasksToDo] = useState([
    { task: "Jog around park x3", id: "1", done: false },
    { task: "Walk the dog", id: "2", done: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StoreContext.Provider
      value={{
        isChecked,
        setIsChecked,
        tasksToDo,
        setTasksToDo,
        newTask,
        setNewTask,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
