document.getElementById('add-btn').addEventListener('click', addTask); 
function addTask() { 
    const taskInput = document.getElementById('task-input'); 
    const taskText = taskInput.value.trim(); 
    if (taskText === '') return; 
    const taskList = document.getElementById('task-list'); 
    const taskItem = document.createElement('li'); 
    const taskSpan = document.createElement('span'); 
    taskSpan.textContent = taskText; 
    taskItem.appendChild(taskSpan); 
    const completeBtn = document.createElement('button'); 
    completeBtn.textContent = '✔️'; 
    completeBtn.addEventListener('click', () => { taskSpan.classList.toggle('completed'); }); 
    taskItem.appendChild(completeBtn); 
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = '❌'; 
    deleteBtn.addEventListener('click', () => { taskList.removeChild(taskItem); });
     taskItem.appendChild(deleteBtn); 
     taskList.appendChild(taskItem); 
     taskInput.value  = '';
    }