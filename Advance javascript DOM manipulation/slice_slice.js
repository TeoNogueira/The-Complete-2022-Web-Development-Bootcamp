let arr = ['tEóFilo nOGueiRA', 'hello', 'world', 'goodbye']


const [one] = arr


function random() {

function execute() {

const getChara = one.slice(0, 1)

const firstCharacterHigh = getChara.toUpperCase()


const restOfName = one.slice(1, one.length).toLowerCase()

const exec = firstCharacterHigh + restOfName
// console.log(exec)

arr[0] = exec

const arrLength = arr.length

const randomArr = Math.floor(Math.random() * arrLength)

const putInArray = arr[randomArr]

console.log( putInArray)


}
execute()
}

random()