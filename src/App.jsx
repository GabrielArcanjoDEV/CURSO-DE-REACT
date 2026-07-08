import { useState, useEffect } from "react";
import title from "./components/title";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        title: "Estudar React",
        description: "Aprender componentes, props e hooks.",
        completed: false,
      },
      {
        id: 2,
        title: "Treinar Java",
        description: "Resolver exercícios de POO.",
        completed: false,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, description) {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-[#7e8aa2] flex justify-center p-8">
      <div className="w-full max-w-xl">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks addTask={addTask} />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;
