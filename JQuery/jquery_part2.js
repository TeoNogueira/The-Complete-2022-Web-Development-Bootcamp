$('h1').before('<h3>Development: Teo Nogueira</h3>')
// $('h1').after('<h3>JQUERY</h3>')
// $('h1').append('<h3>JQUERY</h3>')
// $('h1').prepend('<h3>JQUERY</h3>')
// $('h1').prepend('<h3>JQUERY</h3>')
// $('h3').remove()
// $('h3').hide()
$('h3').css('color', 'white')
$('img').addClass('.img')

$('img').on('click', () => {

    // $('h3').fadeToggle()
    // $('h3').slideToggle()

    $('h3').animate({margin: 20, opacity: 0.5,}).slideToggle().animate({fontSize: 40, opacity: 1})
    // && $('h1').remove()

});