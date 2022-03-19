let contador = 0
const buttonIncrease = document.getElementById('increase')
const buttonRestart = document.getElementById('restart')
const buttonDelete = document.getElementById('delete')
const result = document.getElementById('result')

buttonIncrease.addEventListener('click',()=>{
    result.innerHTML = ++contador
})
buttonDelete.addEventListener('click',()=>{
    if(contador>0) result.innerHTML = --contador
})
buttonRestart.addEventListener('click',()=>{
    result.innerHTML = contador = 0
}) 