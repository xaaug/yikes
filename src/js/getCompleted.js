import displayTask from "./displayTask";

const tabTitle = document.querySelector(".tab-title");
const tabDesc = document.querySelector(".tab-desc");

const getCompleted = (tasks) => {
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (task.completed) {
        displayTask(task);
      } else {
        tabTitle.textContent = "Done and Forgotten";
        tabDesc.textContent =
          "Completed Tasks? 🤔 Oh right, those are just mythical creatures";
      }
    }
  } else {
    tabTitle.textContent = "Done and Forgotten";
    tabDesc.textContent =
      "Completed Tasks? 🤔 Oh right, those are just mythical creatures";
  }
};

export default getCompleted;
