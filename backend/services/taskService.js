const tasks = require("../data/taskData");

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function createTask(newTask) {
    tasks.push(newTask);
    return newTask;
}

function updateTask(id, updatedData) {
    const task = getTaskById(id);

    if (!task) {
        return null;
    }

    Object.assign(task, updatedData);

    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    return tasks.splice(index, 1)[0];
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};