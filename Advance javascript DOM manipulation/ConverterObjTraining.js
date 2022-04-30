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
    

    const getList = hero.filter(item => item.gold < 100000).reduce((acc, {nick}) => {

        acc[nick] = acc[nick] + 1 || 1

        return acc
    }, {})

    // console.log(getList)

const socketHero = Object.getOwnPropertyNames(getList)

// console.log(socketHero)



const random = () => {


const socketLength = socketHero.length
const randomSHero = Math.floor(Math.random() * socketLength)

const putArrayWithRandom = socketHero[randomSHero]


console.log(putArrayWithRandom)


}
setInterval( () => {

    random()


}, 1000)

