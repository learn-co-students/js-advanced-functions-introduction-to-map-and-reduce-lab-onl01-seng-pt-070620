function mapToNegativize(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++) {
        array.push(sourceArray[i] * -1)
    }
    return array 
}

function mapToNoChange(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i ++) {
        array.push(sourceArray[i])
    }
    return array
}

function mapToDouble(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i ++) {
        array.push(sourceArray[i] * 2)
    }
    return array
}

function mapToSquare(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++) {
        array.push(sourceArray[i] ** 2)
    }
    return array
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total =  total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) 
            return false
    }
    return true
}


function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i <sourceArray.length; i++) {
        if (sourceArray[i])
        return true
    } 
    return false
}