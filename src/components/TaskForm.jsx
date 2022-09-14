import { useState, useContext } from "react";
import { context } from "./context/context";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formulario = document.getElementById("form-hot");
  const { CreateTask } = useContext(context);

  return (
    <div className="max-w-md mx-auto">
      <form
        id="form-hot"
        className="bg-slate-900 p-10 mb-10 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          CreateTask({
            title,
            description,
          });
          setDescription("");
          setTitle("");
        }}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crear tareas</h1>
        <input
          className="bg-slate-300 w-full mb-4"
          autoFocus
          placeholder="Escribe el titulo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          placeholder="Escriba la descripcion"
          className="bg-slate-300 w-full mb-4"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-green-800 px-2 py-1 rounded-md hover:bg-green-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
