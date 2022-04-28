import { items } from './arr.js'


const sect = document.querySelector('.section')
// sect.style.background = '#bbd8c9';
// sect.style.width = '900px';
// sect.style.height = '500px';
// sect.style.borderRadius = '20px';
// sect.style.display = 'flex';
// sect.style.justifyContent = 'center';
// sect.style.alignItems = 'center';
// sect.style.color = '#fff';
// sect.style.userSelect = 'none'
// sect.style.outline = 'none'
document.querySelector('li a').style.color = 'red'
document.getElementsByTagName('li')[2].style.color = 'orange'

document.getElementsByTagName('li').length

// sect.addEventListener('mouseover', function() {

// document.querySelector('h1').style.cursor = 'pointer';

// }
// )

document.querySelector('h1').innerHTML = `HELLO FULLSTACK ${items[2]}`


sect.classList.add('invisible')

const invi = document.querySelector('.invisible')
// invi.style.display = 'none'





