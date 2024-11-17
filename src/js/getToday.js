import displayTask from "./displayTask";
import getDate from "./date";

const emptyToday = document.querySelector('.empty-today')
const stateContent  = document.querySelector('.state-content')

const date = getDate()


const getToday = tasks => {
   if (tasks.length > 0) {
      for(const task of tasks) {
         if (task.deadline === date.date) {
           displayTask(task)
         }
      }
   } else {
      stateContent.innerHTML = `<div class="today day-tab">
            <h4>Survival Agenda</h4>
            <div class="empty-today states">
                <h2>Nothing planned for today? 🛌 A true champion of procrastination</h2>
              </div>
         </div>`
   }
}

export default getToday 