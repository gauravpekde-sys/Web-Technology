import type { Task } from "./src/types";


// Task[] = array that can hold only Task objects
let tasks: Task[] = [];

// (title: string) = typed parameter, : void = returns nothing
export function addTask(title: string): void {
    const newTask: Task =
    {
        id: Date.now(),
        title: title,
        completed: false
    };
    tasks.push(newTask);
}

// map() goes through every task and flips completed for the matching id
export function toggleTask(id: number): void {
    tasks = tasks.map((task: Task) => {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }
        return task;
    });
}

// filter() keeps every task except the one with this id
export function deleteTask(id: number): void {
    tasks =
        tasks.filter((task: Task) =>
            task.id !== id
        );
}

// helper so the page can read the current tasks
export function getTasks(): Task[] {
    return tasks;
}