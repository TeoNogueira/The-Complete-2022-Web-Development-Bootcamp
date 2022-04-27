var ask = 'Whats your name?'

var  nickName = 'rOBoT'

var firstCharacter = nickName.slice(0, 1)

var getFirstChar = firstCharacter.toUpperCase()

var restOfChar = nickName.slice(1, nickName.length).toLocaleLowerCase() // force lowercase // rest

var allCharacter = getFirstChar + restOfChar

console.log('Hello ' + allCharacter + ' !')

////

const text = 'return https'

const phraseUpper = text.toUpperCase()

const arr = ['h', 't', 't', 'p', 's', phraseUpper]

const logical = arr.filter(item => item.length -5 === 'h' ? item[0] = 'Comida' : '')

console.log(logical)

// console.log(arr.slice(5, 6))