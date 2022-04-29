import { items, setAtri } from './arr.js'

/*
attention! import will only work if you are running on a client/server
example: extension of vscode liveserver, otherwise it will not modulate the file: arr.js 
*//// 


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

// document.getElementsByTagName('li').textContent.length

// sect.addEventListener('mouseover', function() {

// document.querySelector('h1').style.cursor = 'pointer';

// }
// )



const h1 = document.querySelector('h1')
h1.innerHTML = `HELLO FULLSTACK ${items[2]}`
h1.style.fontFamily = 'Roboto'
h1.style.fontWeight = '900'
h1.style.fontSize = '55px'
h1.style.userSelect = 'none'


/// textContent = 'Atribue apenas o texto, exemplo: se eu estivesse colocando um strong dentro do h1 criado o innerHTML interpretaria a resposta na console como <strong>Texto</strong>  em formato de string também junto ao texto, mais exemplos abaixo:'

document.body.innerHTML += `<h2>Text H2</h2>`
// document.body.textContent = `<h2>Text H2</h2>` << remova o comentário para testar.

/////////
//////////
///////////
////////////
sect.classList.add('invisible')
/////////

const invi = document.querySelector('.invisible')
// invi.style.display = 'none'

///SET ATTRIBUTE

document.querySelector('a').setAttribute('href', 'https://www.google.com')
setAtri()


//exemple
 /*

let d1 = document.getElementById('one');
let d2 = document.getElementById('two');
let a = d1.getAttributeNode('align');

d2.setAttributeNode(a.cloneNode(true));

// Returns: 'left'
alert(d2.attributes[1].value);


*/