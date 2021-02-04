function mapToNegativize(array){
    let negativeNum = []
    for(let i = 0; i < array.length; i++){
        let result = array[i] * -1
        negativeNum.push(result)
    }
    return negativeNum 
}

const mapToNoChange = function(array){
    let noChangeArry = []
    for(let i = 0; i < array.length; i++){
        noChangeArry.push(array[i])
    }
    return noChangeArry
}

const mapToDouble = function(array){
    let doubledarray = []
    for(let i = 0; i < array.length; i++){
        // result = array[i] * 2
        doubledarray.push(array[i] * 2)
    }
    return doubledarray
}

function  mapToSquare(array){
    let squaredArray = []
    for(let i = 0; i < array.length; i++){
        squaredArray.push(array[i]**2)
    }
    return squaredArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let counter = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
        counter += sourceArray[i]
    }
    return counter
}

const reduceToAllTrue = function(sourceArray){
    for(let i = 0; i< sourceArray.length; i++){
        if(!sourceArray[i])
        return false
    }
    return true
}

const reduceToAnyTrue = function(sourceArray){
    for(let i = 0; i< sourceArray.length; i++){
        if(sourceArray[i])
        return true
    }
    return false
}