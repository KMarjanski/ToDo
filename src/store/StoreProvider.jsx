import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [tasksToDo, setTasksToDo] = useState([
    { task: "Jog around park x3", id: uuid(), done: false },
    { task: "Walk the dog", id: uuid(), done: false },
  ]);
  const [displayTasks, setDisplayTasks] = useState([...tasksToDo]);
  const [newTask, setNewTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [optionMenu, setOptionMenu] = useState(1);
  return (
    <StoreContext.Provider
      value={{
        isChecked,
        setIsChecked,
        tasksToDo,
        setTasksToDo,
        newTask,
        setNewTask,
        optionMenu,
        setOptionMenu,
        displayTasks,
        setDisplayTasks,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
