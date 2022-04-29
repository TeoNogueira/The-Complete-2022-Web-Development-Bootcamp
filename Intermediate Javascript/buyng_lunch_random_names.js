let names = ['Teo', 'Angela', 'Evellyn', 'Célia', 'Jack', 'Travis']


function whosPayings() {

    const numberOfPeople = names.length

    const randomPersonPosition = Math.floor(Math.random() * numberOfPeople)
    
    const randomPerson = names[randomPersonPosition]

    console.log(randomPerson)

 
}


whosPayings()

