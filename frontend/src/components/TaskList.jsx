import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleComplete, onEditTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">
          No tasks yet. Add a task to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
