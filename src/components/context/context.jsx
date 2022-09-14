import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../../data/Task";

export const context = createContext();

export function ContextProvider(props) {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);
  function CreateTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function DeleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <context.Provider
      value={{
        tasks,
        CreateTask,
        DeleteTask,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
