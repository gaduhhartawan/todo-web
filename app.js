// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
// FUnctions

function addTodo(event) {
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    // create Li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // Button
    const checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fas fa-check-square"></i>'
    checkButton.classList.add("complete-button")
    todoDiv.appendChild(checkButton)
    // Button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-button")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    // clear input
    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target
    if(item.classList[0] === "trash-button"){
        const todo = item.parentElement
        // animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }

    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

