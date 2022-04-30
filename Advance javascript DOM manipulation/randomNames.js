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

// const filt = hero.filter(item => item.gold >= 62000).reduce((acc, {nome}) => `${acc} ${nome}`, '')

const filt = hero.filter(item => item.gold >= 62000).reduce((acc, {nick}) => {
  acc[nick] =  acc[nick] || + 1

  return acc
}, {})


const bot = Object.getOwnPropertyNames(filt)  // I WIN! //  IMPORTANT: Transform object values ​​into array properties.

// console.log(bot)

function random() {

    const botLength = bot.length

    const botRandom = Math.floor(Math.random() * botLength);

    const putInArray = bot[botRandom]


    console.log(putInArray)
}


setInterval(() => {

    random()

}, 900)



