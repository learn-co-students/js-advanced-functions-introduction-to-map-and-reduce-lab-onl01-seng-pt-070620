// let mapCreator = (a) => {
//     return (func) => {
//         const returnValue = []
//         for(const i of a){
//             returnValue.push((func(i)))
//         }
//         return returnValue
//     }
// } just an idea doesnt work tho

const mapToNegativize = (a) => {
    const returnValue = []
    for(const i of a){
       returnValue.push(i - i * 2)
    }
    return returnValue
}

const mapToNoChange = a => a

const mapToDouble = (a) => {
    const returnValue = []
    for(const i of a){
        returnValue.push(i*2)
    }
    return returnValue
}

const mapToSquare = (a) => {
    const returnValue = []
    for(const i of a){
        returnValue.push(i*i)
    }
    return returnValue
}

const reduceToTotal = (a, startingPoint = 0) => {
    let memo = startingPoint
    for (const i of a){
        memo += i
    }
    return memo
}

const reduceToAllTrue = (a) => {
    let memo = true
    for(const i of a){
        if(i == false){
            memo = false
        }
    }
    return memo
}

const reduceToAnyTrue = (a) => {
    let memo = false
    for(const i of a){
        if(i == true){
            memo = true
        }
    }
    return memo
}