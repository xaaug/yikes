import getDate from "./js/date";
import displayTask from "./js/displayTask";
import getCompleted from "./js/getCompleted";
import getToday from "./js/getToday";
import getTomorrow from "./js/getTomorrow";
import { addTask, setTaskValues, tasks } from "./js/createTask";
import {name as userName} from './js/setName';

import "./style.css";

const inputEl = document.getElementById("task-input");
const extrasEl = document.querySelector(".extras");
const dayEl = document.querySelector(".day");
const tasksContainer = document.querySelector(".tasks");
const taskInputsEl = document.querySelector('.tasks-inputs')
const tabContainer = document.querySelector('.tab')
const stateBtns = document.querySelectorAll('button[data-state]')
const homeContainer = document.querySelector('.home')
const dialog = document.querySelector('dialog')
const dialogInput = document.querySelector('dialog input')

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
    tabContainer.style.display = 'block'
    homeContainer.style.display = "none" 
    getToday(tasks)
    setBtnState(target)
  }
  
  if (target.matches('.tomorrow')) {
    tasksContainer.innerHTML = ''
    tabContainer.style.display = 'block'
    getTomorrow(tasks)
    homeContainer.style.display = "none"
    setBtnState(target)
  }
  
  if (target.matches('.completed-btn')) {
    tasksContainer.innerHTML = ''
    tabContainer.style.display = 'block'
    getCompleted(tasks)
    homeContainer.style.display = "none"
    setBtnState(target)
    
  }

  if (target.matches('.home-btn')) {
    tabContainer.style.display = 'none'
    homeContainer.style.display = 'block'
    setBtnState(target)
  }

  if (target.matches('.edit-name svg')) {
    dialog.showModal()
  }

  if (target.matches('dialog button')) {
    if (dialogInput.value.trim() !== "") {
      document.querySelector('.name').textContent = dialogInput.value.trim()
      dialog.close()

    } else {
      dialogInput.focus()
      return
    }

  }
});

