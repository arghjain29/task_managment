// Base URL for the API
const API_URL = import.meta.env.VITE_API_URL



// Fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        if (!response.ok) throw new Error('Failed to fetch tasks');
        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error)
        throw error
    }
}

// Create a new task
export const createTask = async (taskData) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });
        if (!response.ok) throw new Error('Failed to create task');
        return await response.json();

    } catch (error) {
        console.error("Error creating task:", error)
        throw error
    }
}

// Update an existing task
export const updateTask = async (id, taskData) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });
        if (!response.ok) throw new Error('Failed to update task');
        return await response.json();

    } catch (error) {
        console.error("Error updating task:", error)
        throw error
    }
}

// Delete a task
export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete task');
        return await response.json();
    } catch (error) {
        console.error("Error deleting task:", error)
        throw error
    }
}

