let nttData = [{skills: 0}]


const putServiceTeoInNTTDATA = (callTeo, answer) => {

    console.log(callTeo)

    if(callTeo) {
        nttData.push(answer)
    }

}


function recipeVaga() {
    const nickName = `Teófilo`

    const vagaForTeo = putServiceTeoInNTTDATA(`Temos uma vaga para você ${nickName}!`, `Okay! Estou à caminho`);

}

recipeVaga()

const mySkills = 'HTML, CSS JAVASCRIPT, React, NodeJS'

const filt = nttData.filter(item => item.skills === 0 ? item.skills =  `${mySkills}` : '')


console.log(nttData.reverse())
