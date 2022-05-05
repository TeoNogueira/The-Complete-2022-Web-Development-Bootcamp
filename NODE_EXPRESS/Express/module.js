let mapping = [

    {gold: 80000, hero: 'Angela', type: 'Support',},
    {gold: 450000, hero: 'Yu', type: 'Warrior',},
    {gold: 150000, hero: 'Selena', type: 'Assassin',},
    {gold: 50000, hero: 'Franco', type: 'Support',},
    {gold: 30000, hero: 'Hayabusa', type: 'Assassin',},
    {gold: 40000, hero: 'Harith', type: 'Mage',}

]


const filt = mapping.filter( item => item.gold > 50000).reduce((acc, {hero}) => {
acc[hero] = acc[hero] + 1 || 1

return acc

}, {})

console.log(filt)


const changeObInArray = Object.getOwnPropertyNames(filt)


function random() {

const arrayLength = changeObInArray.length

const randomArray = Math.floor(Math.random() * arrayLength)

const putInArray = changeObInArray[randomArray]

console.log(putInArray)

}

let intr = () => {


    setInterval(() => {

        // random()

    }, 3000)
}

// intr()