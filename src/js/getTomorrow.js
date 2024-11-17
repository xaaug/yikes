import displayTask from "./displayTask";
import getDate from "./date";

const date = getDate();
const todaysDate = Number(date.date.split("-")[0]);
const tomorrowsDate = todaysDate + 1;

const getTomorrow = (tasks) => {
    if (tasks.length > 0) {
        for (const task of tasks) {
          if (Number(task.deadline.split("-")[0]) == tomorrowsDate) {
          }
        }
      }
};

export default getTomorrow;
