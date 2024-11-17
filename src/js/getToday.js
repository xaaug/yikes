import displayTask from "./displayTask";
import getDate from "./date";

const date = getDate()


const getToday = tasks => {
   if (tasks.length > 0) {
      for(const task of tasks) {
         if (task.deadline === date.date) {
            // displayTask()
         }
      }
   }
}

export default getToday 