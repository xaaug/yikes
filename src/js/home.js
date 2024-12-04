import displayTask from "./displayTask";

const stateContent = document.querySelector('.state-content')
const homeContainer = document.querySelector('.home')
const homeEmptyState = document.querySelector('.home-empty')

const setHome = (tasks) => {
    if (tasks.length === 0) {
        homeEmptyState.style.display = 'block'
    } else {

        console.log('Home is not empty')
    }
}

export default setHome