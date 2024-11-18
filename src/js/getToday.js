import displayTask from "./displayTask";
import getDate from "./date";

const tabContainer = document.querySelector(".tab");
const tabTitle = document.querySelector(".tab-title");
const tabDesc = document.querySelector(".tab-desc");

const date = getDate();

const getToday = (tasks) => {
  tabTitle.textContent = "Survival Agenda";
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (task.deadline === date.date) {
        tabDesc.style.display = "none";
        displayTask(task);
      } else {
        tabDesc.textContent =
          "Nothing planned for today? 🛌 A true champion of procrastination";
      }
    }
  } else {
    tabTitle.textContent = "Survival Agenda";
    tabDesc.textContent =
      "Nothing planned for today? 🛌 A true champion of procrastination";
  }
};

export default getToday;
