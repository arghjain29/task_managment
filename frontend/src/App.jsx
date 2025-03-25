import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import EditTaskModal from "./components/EditTaskModal";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError("Failed to fetch tasks");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      setIsLoading(true);
      const createdTask = await createTask(newTask);
      setTasks([...tasks, createdTask]);
    } catch (err) {
      setError("Failed to create task");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      setIsLoading(true);
      const result = await updateTask(updatedTask._id, updatedTask);
      setTasks(
        tasks.map((task) => (task._id === updatedTask._id ? result : task))
      );
      setIsModalOpen(false);
    } catch (err) {
      setError("Failed to update task");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setIsLoading(true);
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError("Failed to delete task");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleComplete = async (id) => {
    const taskToUpdate = tasks.find((task) => task._id === id);
    if (taskToUpdate) {
      const updatedTask = {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      };
      await handleUpdateTask(updatedTask);
    }
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-black mb-6">
              Task Management
            </h1>

            {error && (
              <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            <TaskForm onAddTask={handleAddTask} />

            {isLoading && tasks.length === 0 ? (
              <div className="py-12 flex justify-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-r-primary"></div>
              </div>
            ) : (
              <TaskList
                tasks={tasks}
                onToggleComplete={handleToggleComplete}
                onEditTask={openEditModal}
                onDeleteTask={handleDeleteTask}
              />
            )}
          </div>
        </div>
      </div>

      {isModalOpen && editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={closeEditModal}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  );
}

export default App;
