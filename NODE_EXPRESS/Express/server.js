const express = require('express'); //

const app = express()

app.get('/', function(req, res) {

res.send('<h3>JAVASCRIPT</h3>')
})

app.get('/contact', function(req, res) {

res.send('Contact me at: teonogueira17@gmail.com')

})

app.get('/about', function(req, res) {

res.send('Me chamo Teófilo nogueira, estou disposto há comparecer ao processo de inclusão fullstack');


})

app.get('/github', function(req, res) {

res.send('My github is: <a href="https://github.com/TeoNogueira" target="_blank">Click Here!</a>')

})


app.listen(3000)


