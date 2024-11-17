import displayTask from "./displayTask";

const getCompleted = tasks  => {
    if (tasks.length > 0) {
        for (const task of tasks) {
            if (task.completed) {
                console.log(task)
            }
        }
    }
}

export default getCompleted