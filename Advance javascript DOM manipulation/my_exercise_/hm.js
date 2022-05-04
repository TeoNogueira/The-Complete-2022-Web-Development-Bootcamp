// import { intTimeout} from './module.js'


const iter = document.querySelectorAll('.img').length

const arrImg = ['./image/1_.webp', './image/2_.webp', './image/3_.jpg', './image/4_.jpg', './image/5_.jpg', './image/6_.jpg', './image/8_.webp'] 


function random() {
    let section = document.querySelectorAll('.section')
    
    const getLength = arrImg.length
    
    const randomImg = Math.floor(Math.random() * getLength);
    
    const putInArray = arrImg[randomImg]
    
     const execute = document.querySelector('img').setAttribute('src', `${putInArray}`)
    
    section.innerHTML = execute
    
    
    }
    
 const intTimeout = () => {
    
    setTimeout(() => {
    
    setInterval(() => {
    
    random()
    
    }, 2500)
    
    }, 3000)
    
    
    }
    

for(let i = 0; i < iter; i++) {

    const img = document.querySelectorAll('img');

    img[i].addEventListener('click', function() {


        if(img) {

            let audio = new Audio('./sounds/harvest_moon.mp3')
            audio.play()

            intTimeout()

        } else {

            audio.paused()
        }

    })

}