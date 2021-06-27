let input = document.querySelector('#tarefa')
let lista = document.querySelector('#lista')
let completar = `<img src="complete.png" alt="complete" class="task-image">`
let deletar =  `<img src="delete.png" alt="delete" class="task-image">`

function adicionar(){
    lista.innerHTML += `<li>${input.value}</li>`
    lista.innerHTML += completar
    lista.innerHTML += deletar
}

