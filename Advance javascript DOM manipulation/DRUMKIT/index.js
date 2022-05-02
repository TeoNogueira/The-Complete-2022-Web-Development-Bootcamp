
// const drums = document.querySelectorAll('button')[3] // querySelectorAll() FUNCIONA COMO ARRAY
/// 3 steps:

// 1 - Pego a classe com querySelectorAll().length
// 2 - Faço um loop do valor armazenado acima (no caso do querySelectorAll().length)
// 3 - Dentro do bloco do loop ponha o querySelectorAll + o incremento passado por bloco de array [i], depois addEventlistener para o determinado evento 

const interaClass = document.querySelectorAll('.drum').length


for(var i = 0; i < interaClass; i++) {

const getButton = document.querySelectorAll('button');
/*
let audio = new Audio('./sounds/tom-3.mp3')

 audio.play()

this.style.color = '#bbddaa';

*/

getButton[i].addEventListener('click', function(e) {

let buttonInnerHTML = this.innerHTML;

getSound(buttonInnerHTML)

})

}

// PUSH SWITCHS FOR KEYSPRESS
document.addEventListener('keypress', (e) => {


getSound(e.key)

})



        function getSound(key) {
                
switch(key) {

        case "w":
         let audio = new Audio('./sounds/tom-1.mp3')
         audio.play() 
        break;
        
        case "a":
        let audio2 = new Audio('./sounds/tom-2.mp3')
        audio2.play() 
        break;
        case "s":
        let audio3 = new Audio('./sounds/tom-3.mp3')
        audio3.play() 
        break;
        
        case "d":
        let audio4 = new Audio('./sounds/tom-4.mp3')
        audio4.play() 
        break;
        
        case "j":
        let snare = new Audio('./sounds/snare.mp3')
        snare.play() 
        break;
        
        case "k":
        let crash = new Audio('./sounds/crash.mp3')
        crash.play() 
        break;
        
        case "l":
        let kickBass = new Audio('./sounds/kick-bass.mp3')
        kickBass.play() 
        break;
        default: 
        // default: console.log(buttonInnerHMTL)
        
        
        
        }
        }