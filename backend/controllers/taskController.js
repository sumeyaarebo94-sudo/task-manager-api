const taskService = require("../services/taskService");

function getAllTasks(req, res) {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
}

function getTaskById(req, res) {
    const id = Number(req.params.id);

    const task = taskService.getTaskById(id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
}

function createTask(req, res) {
    const { title, priority } = req.body;

    if (!title || !priority) {
        return res.status(400).json({
            message: "Title and priority are required"
        });
    }

    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        priority
    };

    const createdTask = taskService.createTask(newTask);

    res.status(201).json(createdTask);
}

function updateTask(req, res) {
    const id = Number(req.params.id);

    const updatedTask = taskService.updateTask(id, req.body);

    if (!updatedTask) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(updatedTask);
}

function deleteTask(req, res) {
    const id = Number(req.params.id);

    const deletedTask = taskService.deleteTask(id);

    if (!deletedTask) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task deleted successfully",
        task: deletedTask
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};