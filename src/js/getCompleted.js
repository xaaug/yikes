import displayTask from "./displayTask";

const tabTitle = document.querySelector(".tab-title");
const tabDesc = document.querySelector(".tab-desc");

const getCompleted = (tasks) => {
    tabTitle.textContent = "Done and Forgotten";
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (task.completed) {
        tabDesc.style.display =  'none'
        displayTask(task);
      } else {
        tabDesc.textContent =
          "Completed Tasks? 🤔 Oh right, those are just mythical creatures";
      }
    }
  } else {
    tabDesc.textContent =
      "Completed Tasks? 🤔 Oh right, those are just mythical creatures";
  }
};

export default getCompleted;
