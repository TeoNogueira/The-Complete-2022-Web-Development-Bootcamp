$('h1').addClass('big-title')
$('h1').text('Drum Festival')


const drum = './drum3.jpg'
$('img').attr('src', `${drum}`)


$('img').addClass('img')
// $('a').attr('href', 'https://github.com/')
// $('a').attr('target', '_blank')

//////

$(document).keypress(function(e) {

$('h1').text(e.key)

})
$('h1').mouseover(function(e) {

$('h1').css('color', '#aad9ca')
$('h1').css('cursor', 'pointer')

})
$('h1').mouseout(function(e) {

    $('h1').css('color', 'rgb(238, 48, 15)')
    
    })

    $('footer').addClass('footer')

// 
// const iterar = ['./drum.jpg', './drum2.jpg', 'drum3.jpg']
// function randomDrum() {

// const itLength = iterar.length

// const randomIt = Math.floor(Math.random() * itLength);

// const putArray = iterar[randomIt]
// $('img').attr('src', `${putArray}`)

// }

// setInterval(() => {

// randomDrum()

// }, 5000)



//MINIFIER.ORG


