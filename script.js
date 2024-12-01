// Load saved todos on page load
window.onload = function () {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach((task) => addTodoToList(task));
};

// Add a new to-do
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const task = todoInput.value.trim();
  if (task) {
    addTodoToList(task);
    todoInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Add task to list
function addTodoToList(task) {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;
  li.appendChild(span);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteButton);

  todoList.appendChild(li);
}

// Clear all tasks
function clearTodos() {
  document.querySelectorAll("#todo-list li").forEach((li) => li.remove());
}

// Empty all tasks
function emptyTodos() {
  if (confirm("Are you sure you want to empty the list?")) {
    document.getElementById("todo-list").innerHTML = "";
  }
}

// Save tasks to localStorage
function saveTodos() {
  const tasks = [];
  document.querySelectorAll("#todo-list li span").forEach((span) => {
    tasks.push(span.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(tasks));
  alert("Tasks saved successfully!");
}
