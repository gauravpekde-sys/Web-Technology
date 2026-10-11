let id_num = 0;
let board = document.querySelector(".board");

function addTask() {
    let task = prompt("Enter Task: ");

    if (task === null) {
        return;
    }

    if (task.trim() === '') {
        alert("Task can't be empty");
        return;
    }

    id_num += 1;
    const newTaskDiv = document.createElement('div');
    const newDelDiv = document.createElement('div');

    newTaskDiv.className = `task-${id_num}`;
    newDelDiv.className = `task-${id_num}`;

    newTaskDiv.innerHTML = `<h4 id="task">${task}</h4>`;
    newDelDiv.innerHTML = `<button type="button" id="delete" onclick="deleteTask('task-${id_num}')">Delete</button>`;

    board.append(newTaskDiv, newDelDiv);
}

function clearAll() {
    board.innerHTML = '';
}

function deleteTask(obj) {
    const elements = document.querySelectorAll(`.${obj}`);
    elements.forEach(element => {
        element.remove();
    });
}
