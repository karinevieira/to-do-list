let input = document.querySelector('#tarefa')
let lista = document.querySelector('#lista')
let completar = `<img src="complete.png" alt="complete" class="task-image" onclick="remover()">`
let deletar =  `<img src="delete.png" alt="delete" class="task-image">`

function adicionar(){
    lista.style.display = 'block'
    lista.innerHTML += `<li>${input.value}</li>`
    lista.innerHTML += completar
    lista.innerHTML += deletar
}

function remover(){
    lista.style.display = 'none'
}

