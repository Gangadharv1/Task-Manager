function addTask(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (task) {
                resolve(task);
            } else {
                reject('Task cannot be empty');
            }
        }, 500); 
    });
}

// Function to create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;

   
    // Create the Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    
    const clearSymbol = document.createElement('button');
    clearSymbol.textContent = '✖';
    clearSymbol.classList.add('clear-symbol');
    clearSymbol.addEventListener('click', () => {
        li.remove();
    });

  
    li.appendChild(completeButton);
    li.appendChild(clearSymbol);
    return li;
}

// Event listener for the Add Task button
document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    addTask(task)
        .then((newTask) => {
            const taskList = document.getElementById('task-list');
            const taskElement = createTaskElement(newTask);
            taskList.appendChild(taskElement);
            taskInput.value = ''; 
        })
        .catch((error) => {
            alert(error);
        });
});