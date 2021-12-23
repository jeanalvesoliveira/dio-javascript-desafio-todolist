let btnAdd = document.getElementById('btnAdd')
let inputTask = document.getElementById('inputTask')
let count = document.getElementById('count')

let tasks = document.getElementById('tasks')

// adicionar tarefa
function addTask(){
    // criando os novos elementos
    let task = document.createElement('input')
    let lblTask = document.createElement('label')
    let br = document.createElement('br')

    // incrementando o contador
    count.value++

    // setando atributos do input:checkbox
    task.type = 'checkbox'
    task.name = 'task'
    task.id = 'task' + count.value
    task.value = inputTask.value

    // setando atributos do label
    lblTask.innerHTML = inputTask.value
    lblTask.htmlFor = task.id
    lblTask.id = 'lblTask' + count.value

    // adicionando os elementos a DIV
    tasks.appendChild(task)
    tasks.appendChild(lblTask)
    tasks.appendChild(br)

    // limpando o input:text
    inputTask.value = ''
}

let task = document.getElementsByName('task')

// marcar tarefa completada
function completeTask(){
    for (let i = 0; i < tasks.children.length; i++) {
        if(tasks.children[i].checked == true){
            checkTask = tasks.children[i]
            for (let j = 0; j < tasks.children.length; j++) {
                if(checkTask.value == tasks.children[j].innerHTML) {
                    tasks.children[j].style.textDecoration = 'line-through'
                    tasks.children[j].disabled = true
                    checkTask.disabled = true
                }
            }
        }
    }
}

// delegando o evento à div-pai dos checkboxes
tasks.addEventListener('change', completeTask)

btnAdd.addEventListener('click', addTask)