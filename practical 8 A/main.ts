import "./style.css";
import { addTask, toggleTask, deleteTask, getTasks } from "./todoLogic";
import type { Task } from "./src/types";


const input = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("taskList") as HTMLUListElement;

// Draws the task list on the page
function render(): void {
    list.innerHTML = "";

    getTasks().forEach((task: Task) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.title;
        span.style.textDecoration = task.completed ? "line-through" : "none";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.onclick = () => {
            toggleTask(task.id);
            render();
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            deleteTask(task.id);
            render();
        };

        li.append(span, completeBtn, deleteBtn);
        list.appendChild(li);
    });
}

// Add button
addBtn.onclick = () => {
    if (input.value.trim() === "") {
        return;
    }
    addTask(input.value);
    input.value = "";
    render();
};

render();