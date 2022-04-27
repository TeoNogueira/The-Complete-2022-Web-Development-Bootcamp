const arr = [15, 42, -15, 75, 250, 200, 300, 11]


const testFind = arr.find(logicalFindSocket)

console.log(testFind) // get in order 


function logicalFindSocket(fMore) {


    return fMore > 75
    
}


// FILTER


const arr2 = [15, 42, -15, 75, 250, 200, 300, 11]


const testFind2 = arr2.filter(logicalFindSocket)

console.log(testFind2) // get in order 


function logicalFindSocket(fMore) {


    return fMore > 75
    
}


