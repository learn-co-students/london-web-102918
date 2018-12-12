const formEl = document.querySelector('#new-todo-form');
const inputEl = document.querySelector('input[name=new-todo]');
const listEl = document.querySelector('#todo-list')

function init() {
  formEl.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e)

  const newTodoText = inputEl.value

  const todoEl = document.createElement('li')
  todoEl.className = 'card'
  todoEl.innerText = newTodoText

  listEl.append(todoEl)

  listEl.addEventListener('click', handleCompleteToDo)

  inputEl.value = ''
}

function handleCompleteToDo (e) {
  e.target.classList.toggle('done')
}

// - delete on double click (try it yourself)
// - persist on reload (something with server) (Thursday)

init();
