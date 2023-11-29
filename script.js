document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a valid task!");
        return;
    }

    var tasksContainer = document.getElementById("tasks");

    var taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="removeBtn"><i class='bx bxs-trash'></i></button>
    `;

    tasksContainer.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";

    // Add event listeners to the newly created elements
    taskElement.querySelector("input[type='checkbox']").addEventListener("click", function() {
        toggleTask(this);
    });

    taskElement.querySelector(".removeBtn").addEventListener("click", function() {
        removeTask(this);
    });
}

function toggleTask(checkbox) {
    var taskText = checkbox.nextElementSibling; // Get the span element
    taskText.classList.toggle("completed");
}

function removeTask(button) {
    var taskElement = button.parentElement;
    taskElement.remove();
}
