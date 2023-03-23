
document.addEventListener("DOMContentLoaded", () => {
  const taskDescription = document.getElementById('new-task-description')
  // your code here
});

function addTask(e) {
  
  let li = document.createElement('li');
  let taskList = document.getElementById('tasks');
  taskList.appendChild(li);
  li.textContent = e.target["new-task-description"].value;
  e.preventDefault();
}

function addToList() {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask)
}

addToList()