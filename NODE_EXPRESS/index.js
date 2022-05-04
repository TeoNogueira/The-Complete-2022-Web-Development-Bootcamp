// const fs = require('fs');


// fs.copyFileSync('basic commands.txt', 'file2.txt');


var superheroes = require('superheroes');
var superVillains = require('supervillains')
var executeSuper = superheroes.random();
var executeVillains = superVillains.random();

console.log(`Hero: ${executeSuper}`)
console.log(`Villain: ${executeVillains}`)