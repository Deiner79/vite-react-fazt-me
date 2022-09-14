import TaskCard from "./TaskCard";
import { useContext } from "react";
import { context } from "./context/context";

function TaskList() {
  const { tasks, DeleteTask } = useContext(context);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white font-bold text-4xl text-center">
        No hay tareas aun
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
