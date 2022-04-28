const car = 19000
const moto = 30000
const myCash = 50000

function buy(money, rest) {

return money - rest

}

if(car > 18000 || moto > 50000) {

console.log('you bought the motorcycle! your money: ' + buy(myCash, moto))

} else(

    console.log(myCash)
)