const API_URL = "http://localhost:3000/api/tasks";

const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const priorityInput = document.getElementById("priority");

function displayTasks(tasks) {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        taskList.innerHTML += `
            <div class="task">
                <h3>${task.title}</h3>

                <p><strong>Priority:</strong> ${task.priority}</p>

                <p>
                    <strong>Status:</strong>
                    ${task.completed ? "✅ Completed" : "❌ Pending"}
                </p>

                <button onclick="toggleTask(${task.id}, ${task.completed})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;
    });
}

async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    displayTasks(tasks);
}

taskForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newTask = {
        title: titleInput.value,
        priority: priorityInput.value
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    });

    if (response.ok) {
        titleInput.value = "";
        priorityInput.value = "low";
        loadTasks();
    }
});

async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        loadTasks();
    }
}

async function toggleTask(id, completed) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: !completed
        })
    });

    if (response.ok) {
        loadTasks();
    }
}

async function filterTasks(status) {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    const filteredTasks = tasks.filter(task => task.completed === status);

    displayTasks(filteredTasks);
}

loadTasks();