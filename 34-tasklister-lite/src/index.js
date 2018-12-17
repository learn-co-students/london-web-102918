const formEl = document.querySelector('#create-task-form')
const inputEl = document.querySelector('#new-task-description')
const priorityEl = document.querySelector('#new-task-priority')
const tasksEl = document.querySelector('#tasks')


const editFormEl = document.querySelector('#edit-task-form')
const editInputEl = document.querySelector('#task-description')
const editPriorityEl = document.querySelector('#task-priority')

formEl.addEventListener('submit', handleFormSubmit)

let state =  {
  currentlyEditingTaskEl: null
}


let taskList = []

function handleFormSubmit(event) {
  // stop refresh
  event.preventDefault()
  // get data
  const taskName = inputEl.value
  const taskPriority = priorityEl.value
  // create element
  const newTask = document.createElement('li')
  newTask.className = `priority-${taskPriority}`

  // add task name span (so we can update it separately later)
  const taskNameEl = document.createElement('span')
  taskNameEl.innerText = taskName
  // attach el to task list
  newTask.appendChild(taskNameEl)

  // add edit button
  const editButton = document.createElement('button')
  editButton.innerText = 'edit'
  // attach el to task list
  newTask.appendChild(editButton)
  editButton.addEventListener('click', editTask)

  // attach el to task list
  tasksEl.appendChild(newTask)

  // reset form
  inputEl.value = ''
}

function editTask(event) {
  event.preventDefault()
  const taskName = event.target.parentElement.querySelector('span').innerText
  const taskPriority = event.target.parentElement.className.substr(-1);

  state.currentlyEditingTaskEl = event.target.parentElement
  editInputEl.value = taskName
  editPriorityEl.value = taskPriority

  editFormEl.classList.remove('hidden')
}

const handleEditSubmit = event => {
  event.preventDefault()
  editFormEl.classList.add('hidden')

  console.log(state.currentlyEditingTaskEl)

  state.currentlyEditingTaskEl.querySelector('span').innerText = editInputEl.value
  state.currentlyEditingTaskEl.className = `priority-${editPriorityEl.value}`
}

editFormEl.addEventListener('submit', handleEditSubmit)
