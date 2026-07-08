import { useState } from "react";
import Button from "./button";
import Input from "./input";

function AddTasks({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask() {
    addTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-6 space-y-4">
      <Input
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={handleAddTask}>Adicionar</Button>
    </div>
  );
}

export default AddTasks;
