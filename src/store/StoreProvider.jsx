import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [tasksToDo, setTasksToDo] = useState([
    { task: "Complete online JavaScript course", id: uuid(), done: true },
    { task: "Jog around park x3", id: uuid(), done: false },
    { task: "10 minutes meditation", id: uuid(), done: false },
    { task: "Read for 1 hour", id: uuid(), done: false },
    { task: "Pick up groceries", id: uuid(), done: false },
    { task: "Complete Todo App on Frontend Mentor", id: uuid(), done: false },
  ]);
  const [displayTasks, setDisplayTasks] = useState([...tasksToDo]);
  const [newTask, setNewTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [optionMenu, setOptionMenu] = useState(1);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
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
        isDarkModeOn,
        setIsDarkModeOn,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
