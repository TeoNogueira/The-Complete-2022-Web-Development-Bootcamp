// const fruits = ['apple', 'pineapple', 'papaya', 'lemon', 'guava']

// console.log('quantity: ' + fruits.length) // 5

// console.log('preference: ' + fruits[4]) // guava


const fruits = ['apple', 'pineapple', 'papaya', 'lemon', 'guava']

const writeFruitsCorrect = prompt('type a fruit from the list')


if(fruits.includes(writeFruitsCorrect)) {

    fruits.push('strawberry secret in array')
    document.body.innerHTML = 'WELCOME MOBILE LEGENDS ' 

} else {

    alert('Sorry, maybe next time.')
}

console.log(fruits)
