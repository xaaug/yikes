const tasksContainer = document.querySelector(".tasks");

const displayTask = (task) => {
    console.log(task.deadline)
  tasksContainer.innerHTML += ` <div class="task ${task.completed ? 'completed' : ''}">
    <div class="start">
      <div class="task-done"></div>
      <div class="task-main">
        <h4 class="task-title">${task.taskItem}</h4>
        <p class="task-desc">
          ${task.description}
        </p>
      </div>
    </div>

    <div class="end">
      <div class="priority-${task.priority}"></div>
      <p class="deadline">${task.deadline}</p>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </button>
    </div>
  </div>`;
};

export default displayTask;
