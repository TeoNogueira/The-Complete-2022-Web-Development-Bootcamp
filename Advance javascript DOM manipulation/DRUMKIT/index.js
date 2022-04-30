
// const drums = document.querySelectorAll('button')[3] // querySelectorAll() FUNCIONA COMO ARRAY
/// 3 steps:

// 1 - Pego a classe com querySelectorAll().length
// 2 - Faço um loop do valor armazenado acima (no caso do querySelectorAll().length)
// 3 - Dentro do bloco do loop ponha o querySelectorAll + o incremento passado por bloco de array [i], depois addEventlistener para o determinado evento 


let numberOfButtons = document.querySelectorAll('.drum').length;

for(var i = 0; i < numberOfButtons; i++) {

const clicked = document.querySelectorAll('button');

clicked[i].addEventListener('click', function() {
    
        alert('i got Click!');
    
        })


}

