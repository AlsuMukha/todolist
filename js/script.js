let addMassages = document.querySelector('.todo-list__input'),
    addButton = document.querySelector('.todo-list__button'),
    taskList = document.querySelector('.todo-list__item')

addButton.addEventListener('click', function(){
    if (addMassages.value == "") {
        return
    }
    else {
        const li = document.createElement('li')
        li.innerHTML = addMassages.value
        taskList.appendChild(li)
        const span = document.createElement('span')
        li.appendChild(span)
    }
    addMassages.value = ""
    saveTasks()
    
})

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('check')
        saveTasks()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveTasks()
    }
    
    localStorage.setItem()
})

function saveTasks() {
    localStorage.setItem('task', taskList.innerHTML)
}

function showTasks() {
    taskList.innerHTML = localStorage.getItem('task')
}
showTasks()

