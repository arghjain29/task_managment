import { Pencil, Trash2 } from "lucide-react";

function TaskItem({ task, onToggleComplete, onEditTask, onDeleteTask }) {
  return (
    <div
      className={`p-4 border rounded-lg transition-all ease-in-out ${
        task.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-200"
      } hover:shadow-md hover:bg-slate-50 `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className="flex-shrink-0 pt-0.5">
            <button
              onClick={() => onToggleComplete(task._id)}
              className={`h-5 w-5 rounded-md border ${
                task.completed
                  ? "bg-amber-600 border-amber-800"
                  : "border-gray-300 bg-transparent"
              } flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer`}
              aria-label={
                task.completed ? "Mark as incomplete" : "Mark as complete"
              }
            >
              {task.completed && (
                <svg
                  className="h-3 w-3 text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className={`text-sm font-medium ${
                task.completed ? "text-gray-500 line-through" : "text-gray-900"
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p
                className={`mt-1 text-sm ${
                  task.completed ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {task.description}
              </p>
            )}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 flex space-x-2">
          <button
            onClick={() => onEditTask(task)}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition-colors"
            aria-label="Edit task"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDeleteTask(task._id)}
            className="text-gray-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition-colors"
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
