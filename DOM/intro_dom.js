const sect = document.querySelector('.section')

sect.style.background = '#bbd8c9';
sect.style.width = '900px';
sect.style.height = '500px';
sect.style.borderRadius = '20px';
sect.style.display = 'flex';
sect.style.justifyContent = 'center';
sect.style.alignItems = 'center';
sect.style.color = '#fff';
sect.style.userSelect = 'none'
sect.style.outline = 'none'

sect.addEventListener('mouseover', function() {

document.querySelector('h1').style.cursor = 'pointer';

}
)


document.querySelector('h1').innerHTML = 'HELLO FULLSTACK!'




