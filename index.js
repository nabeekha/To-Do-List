const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

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

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}