const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const todoToggle = document.getElementById('todo-toggle');
const todoContainer = document.getElementById('todo-container');

// Add task function
function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
}

// Event listener for the input field (press Enter to add a task)
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && taskInput.value !== '') {
        addTask(taskInput.value); // Add task to the list
        taskInput.value = ''; // Clear input field
    }
});

// Event listener for the add task button
addTaskButton.addEventListener('click', function () {
    if (taskInput.value !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

// function for the task open container button
todoToggle.addEventListener('click', function () {
    todoContainer.classList.toggle('hidden');
    todoToggle.textContent = todoContainer.classList.contains('hidden')
        ? 'Add New Task ▼'
        : 'Add New Task ▲';
});