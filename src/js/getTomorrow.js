import displayTask from "./displayTask";
import getDate from "./date";

const tabTitle = document.querySelector(".tab-title");
const tabDesc = document.querySelector(".tab-desc");

const date = getDate();
const todaysDate = Number(date.date.split("-")[0]);
const tomorrowsDate = todaysDate + 1;

const getTomorrow = (tasks) => {
  tabTitle.textContent = "Disaster in the making";
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (Number(task.deadline.split("-")[0]) == tomorrowsDate) {
        tabDesc.style.display = "none";
        displayTask(task);
      } else {
        tabDesc.textContent =
          "Tomorrow's looking suspiciously free. 🈚 Enjoy it because that won't last";
      }
    }
  } else {
    tabDesc.textContent =
      "Tomorrow's looking suspiciously free. 🈚 Enjoy it because that won't last";
  }
};

export default getTomorrow;
