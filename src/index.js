// import getInput from './js/getInput'
import getDate from "./js/date";
import displayTask from "./js/displayTask";
import getCompleted from "./js/getCompleted";
import getToday from "./js/getToday";
import getTomorrow from "./js/getTomorrow";

import "./style.css";

const inputEl = document.getElementById("task-input");
const extrasEl = document.querySelector(".extras");
const descriptionEl = document.getElementById("desc");
const inputEmptyError = document.querySelector(".no-task-error");
const priorityEl = document.getElementById("priority");
const dateEl = document.querySelector('input[type="date"]');
const checkBoxs = document.querySelectorAll(".task-done");
const dayEl = document.querySelector(".day");
const tasksContainer = document.querySelector(".tasks");

const formattedDate = getDate();

const tasks = [];
let taskValues = null;

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

dayEl.textContent = `It's ${formattedDate.day}, ${formattedDate.date.split("-")[0]} ${formattedDate.month} ${formattedDate.date.split("-")[2]}`;

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

const addTask = (taskValues) => {
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
    console.log(tasks);
    reset();
  } else {
    inputEmptyError.style.display = "block";
  }
};

inputEl.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    addTask(taskValues);
  }
});

document.addEventListener("input", ({ target }) => {
  if (target.matches(".input-field")) {
    setTaskValues();
  }
});

document.addEventListener("click", ({ target }) => {
  if (target.matches("#task-input")) {
    extrasEl.style.display = "block";
  }

  if (target.matches(".add-task")) {
    addTask(taskValues);
  }

  if (target.matches(".task-done")) {
    const taskToCheck =
      target.nextSibling.parentElement.childNodes[3].childNodes[1].textContent;
    tasksContainer.innerHTML = "";
    for (const task of tasks) {
      if (task.taskItem === taskToCheck) {
        task.markCompleted();
      }
      displayTask(task);
    }

  }

  if (target.matches('.today')) {
    getToday(tasks)
  }

  if (target.matches('.tomorrow')) {
    getTomorrow(tasks)
  }

  if (target.matches('.completed')) {
    getCompleted(tasks)
  }
});
