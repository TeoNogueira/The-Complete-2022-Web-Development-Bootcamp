
// const drums = document.querySelectorAll('button')[3] // querySelectorAll() FUNCIONA COMO ARRAY
/// 3 steps:

// 1 - Pego a classe com querySelectorAll().length
// 2 - Faço um loop do valor armazenado acima (no caso do querySelectorAll().length)
// 3 - Dentro do bloco do loop ponha o querySelectorAll + o incremento passado por bloco de array [i], depois addEventlistener para o determinado evento 

const interaClass = document.querySelectorAll('.drum').length


for(var i = 0; i < interaClass; i++) {

const getButton = document.querySelectorAll('button');

getButton[i].addEventListener('click', function(e) {

// let audio = new Audio('./sounds/tom-3.mp3')

// audio.play()

this.style.color = '#bbddaa';


})

}