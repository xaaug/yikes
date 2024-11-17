import getDate from "./date";
import displayTask from "./displayTask";

const inputEl = document.getElementById("task-input");
const extrasEl = document.querySelector(".extras");
const descriptionEl = document.getElementById("desc");
const inputEmptyError = document.querySelector(".no-task-error");
const priorityEl = document.getElementById("priority");
const dateEl = document.querySelector('input[type="date"]');
const tasksContainer = document.querySelector(".tasks");
const emptyHome = document.querySelector('.empty-tasks')

const tasks = [];
let taskValues = null;
const formattedDate = getDate();

class TaskItem {
  constructor(task, description, priority, deadline) {
    (this.taskItem = task),
      (this.description = description),
      (this.priority = priority),
      (this.deadline = deadline),
      (this.completed = false);
  }

  markCompleted() {
    this.completed = !this.completed;
  }
}

const setTaskValues = () => {
  if (inputEl.value.trim() !== "" || descriptionEl.value.trim() !== "") {
    inputEmptyError.style.display = "none";
    taskValues = {
      task: inputEl.value,
      desc: descriptionEl.value,
    };
  } else {
    reset();
    return;
  }
};

const reset = () => {
  inputEl.value = "";
  descriptionEl.value = "";
  priorityEl.value = "high";
  dateEl.value = formattedDate;
  extrasEl.style.display = "none";
  inputEl.blur();
  taskValues = null;
};

const updateTasksArray = (
  task,
  desc,
  priority = "high",
  deadline = formattedDate.date
) => {
  tasks.unshift(new TaskItem(task, desc, priority, deadline));
};

const addTask = () => {
  if (taskValues) {
    tasksContainer.innerHTML = "";
    updateTasksArray(
      taskValues.task,
      taskValues.desc,
      priorityEl.value,
      dateEl.value
        ? dateEl.value.split("-").reverse().join("-")
        : formattedDate.date
    );
    for (const task of tasks) {
      displayTask(task);
    }
    emptyHome.style.display = 'none'
    reset();
  } else {
    inputEmptyError.style.display = "block";
  }
};

export { addTask, setTaskValues, tasks };
