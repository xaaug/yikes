import displayTask from "./displayTask";

const stateContent = document.querySelector('.state-content')

const getCompleted = (tasks) => {
  if (tasks.length > 0) {
    for (const task of tasks) {
      if (task.completed) {
        console.log(task);
      }
    }
  } else {
    stateContent.innerHTML  = `<div class="completed-page day-tab">
            <h4>Done and Forgotten</h4>
            <div class="empty-completed states">
                <h2>Completed tasks?🤔 Oh right, those are just mythical creatures</h2>
              </div>
         </div>`
  }
};

export default getCompleted;
