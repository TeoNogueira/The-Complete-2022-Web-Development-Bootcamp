let  img1 = document.querySelector('.img1');
let  img2 = document.querySelector('.img2');

let links = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']



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


setInterval(() => {
    random1()
 random() 
    

},500)
