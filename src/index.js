import getDate from "./js/date";
import displayTask from "./js/displayTask";
import getCompleted from "./js/getCompleted";
import getToday from "./js/getToday";
import getTomorrow from "./js/getTomorrow";
import { addTask, setTaskValues, tasks } from "./js/createTask";

import "./style.css";

const inputEl = document.getElementById("task-input");
const extrasEl = document.querySelector(".extras");
const dayEl = document.querySelector(".day");
const tasksContainer = document.querySelector(".tasks");
const taskInputsEl = document.querySelector('.tasks-inputs')
const stateContent = document.querySelector('.state-content')
const stateBtns = document.querySelectorAll('button[data-state]')
const homeContainer = document.querySelector('.home')

const formattedDate = getDate();

dayEl.textContent = `It's ${formattedDate.day}, ${formattedDate.date.split("-")[0]} ${formattedDate.month} ${formattedDate.date.split("-")[2]}`;

const setBtnState = target => {
  stateBtns.forEach(btn => btn.dataset.state = 'not')
  for (const btn of stateBtns) {
    if (btn.textContent === target.textContent) {
      btn.dataset.state = 'selected'
    }
  }
}


inputEl.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    addTask();
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
    addTask();
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
    tasksContainer.innerHTML = ''
    getToday(tasks)
    homeContainer.style.display = "none" 
    setBtnState(target)
  }

  if (target.matches('.tomorrow')) {
    getTomorrow(tasks)
    homeContainer.style.display = "none"
    setBtnState(target)
  }

  if (target.matches('.completed-btn')) {
    getCompleted(tasks)
    homeContainer.style.display = "none"
    setBtnState(target)
    
  }

  if (target.matches('.home-btn')) {
    stateContent.innerHTML = ''
    homeContainer.style.display = 'block'
    setBtnState(target)
  }
});

