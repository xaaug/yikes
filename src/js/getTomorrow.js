import displayTask from "./displayTask";
import getDate from "./date";

const tabTitle = document.querySelector(".tab-title");
const tabDesc = document.querySelector(".tab-desc");

const date = getDate();
const todaysDate = Number(date.date.split("-")[0]);
const tomorrowsDate = todaysDate + 1;

const getTomorrow = (tasks) => {
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (Number(task.deadline.split("-")[0]) == tomorrowsDate) {
        displayTask(task);
      } else {
        tabTitle.textContent = "Disaster in the making";
        tabDesc.textContent =
          "Tomorrow's looking suspiciously free. 🈚 Enjoy it because that won't last";
      }
    }
  } else {
    tabTitle.textContent = "Disaster in the making";
    tabDesc.textContent =
      "Tomorrow's looking suspiciously free. 🈚 Enjoy it because that won't last";
  }
};

export default getTomorrow;
