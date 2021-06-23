let input = document.querySelector('#tarefa')
let lista = document.querySelector('#lista')

function adicionar(){
    lista.innerHTML += `<li>${input.value}</li>`
}