let moto= 50000
let car = 150000


function add(a, b) {

return a + b

}

function mult(a, b, more) {


    return a * b + more

} 

function add2(a, b, c, d) {

    return a * c - d / b
}


function multDiv(a, b, c) {

return a + b / c

}


function result(a, b) {

return a - b

}


console.log(result(mult(50, 599, add(50, 50)),
 multDiv(1500, 1902, add2(50, 7, 2000, 4))))



 