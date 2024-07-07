const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTask);
    const taskLabel = document.createElement("label");
    taskLabel.innerText = taskText;
    taskLabel.setAttribute("for", `task-${taskList.children.length + 1}`);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10060;"; // red cross icon
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", deleteTask);
    const div = document.createElement("div");
    div.classList.add("checkbox");
    div.appendChild(checkbox);
    div.appendChild(taskLabel);
    li.appendChild(div);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}

function toggleTask(event) {
  const li = event.target.parentElement.parentElement;
  li.classList.toggle("checked");
}