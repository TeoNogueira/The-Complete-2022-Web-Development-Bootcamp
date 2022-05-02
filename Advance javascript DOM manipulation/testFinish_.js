
const hero = [

    {nick: 'Leomord', type: 'Fighter', gold: 95000, },
    {nick: 'Granger', type: 'Marksman', gold: 61990, },
    {nick: 'Alice', type: 'Mage', gold: 55000, },
    {nick: 'Alpha', type: 'Fighter', gold: 95000, },
    {nick: 'Lunox', type: 'Mage', gold: 75000, },
    {nick: 'Kagura', type: 'Mage', gold: 35000, },
    {nick: 'Rafaela', type: 'Support', gold: 25000, },
    {nick: 'Fanny', type: 'Assassin', gold: 15000, },
    {nick: 'Angela', type: 'Support', gold: 105000, },
    {nick: 'Harith', type: 'Mage', gold: 125000, },
    {nick: 'Chou', type: 'Fighter', gold: 55000, },
    {nick: 'Selena', type: 'Assassin', gold: 65000, },
    {nick: 'Claude', type: 'Marksman', gold: 65000, },
    {nick: 'Hayabusa', type: 'Assassin', gold: 62000, },
    {nick: 'Granger', type: 'Marksman', gold: 61990, },
    {nick: 'Kagura', type: 'Mage', gold: 35000, },
    {nick: 'Argus', type: 'Fighter', gold: 45000, },
    
    ]


    const filt = hero.filter(item => item.type === 'Mage').reduce((acc, {nick}) => {

        acc[nick] = acc[nick] + 1 || 1

        return acc
    }, {})



const priority = Object.getOwnPropertyNames(filt)

const randomFunc = () => {

const priorityLength = priority.length

const randomPrio = Math.floor(Math.random() * priorityLength);

const putInArray = priority[randomPrio]
const h3 = document.querySelector('.h3');

h3.innerHTML = `${putInArray}`

}


const reveal = () => {

    setInterval(() => {
        // randomFunc()
    }, 1000)

    
}

reveal()


// const arr = ['tEofilo']

// const [one] =  arr

// function organize() {

//     const arrLength = one.slice(0,1)

//     const upp = arrLength.toUpperCase()


//     const restOfName = one.slice(1, one.length).toLowerCase()

//     const total = upp + restOfName
// console.log(total)

// }

// organize()