let  img1 = document.querySelector('.img1');
let  img2 = document.querySelector('.img2');

let links = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']

let h1 = document.querySelector('h1')
// let p = document.querySelector('p')

h1.style.userSelect = 'none'
// p.style.userSelect = 'none'

function random1() {

    const numberLinks = links.length
    const randomLinks = Math.floor(Math.random() * numberLinks);
    
    const randomExecute = links[randomLinks]

    img1.setAttribute('src', `${randomExecute}`)

}


function random() {

    const numbL = links.length
    const randomL = Math.floor(Math.random() * numbL);
    
    const randomE = links[randomL]

        img2.setAttribute('src', `${randomE}`)

}


// function pushConsts(a, b) {

//     if(a > b) {

//         document.querySelector('h1').innerHTML = 'Player 1 win'
    
//     } else if(b > a) {
    
//         document.querySelector('h1').innerHTML = 'Player 2 win'
        
//     } else {
    
    
//         document.querySelector('h1').innerHTML = 'Draw Game!!'
//     }
    

// }
// pushConsts(img1.length, img2.length)


setInterval(() => {
   
    random1()
      random()
 
    }, 2000)  
    







// function execute(a, b) {

//     if(a > b) {
    
//         document.querySelector('h1').innerHTML = 'Player 1 win'
    
//     } else if(b > a) {
    
//         document.querySelector('h1').innerHTML = 'Player 2 win'
    
//     } else {
    
//         document.querySelector('h1').innerHTML = 'draw'
//     }
    
//     }