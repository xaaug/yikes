import displayTask from "./displayTask";
import getDate from "./date";


const stateContent  = document.querySelector('.state-content')

const date = getDate();
const todaysDate = Number(date.date.split("-")[0]);
const tomorrowsDate = todaysDate + 1;

const getTomorrow = (tasks) => {
    if (tasks.length > 0) {
        for (const task of tasks) {
          if (Number(task.deadline.split("-")[0]) == tomorrowsDate) {
          }
        }
      } else {
        stateContent.innerHTML = `<div class="tomorrow day-tab">
            <h4>Disaster in the making</h4>
            <div class="empty-tomorrow states">
                <h2>Tomorrow's looking suspiciously free.🈚 Enjoy it because that won't last</h2>
              </div>
         </div>`
      }
};

export default getTomorrow;
