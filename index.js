// Your code here
function mapToNegativize(sourceArray){
    let negatives = []
    // Runs 4 times (length of sourceArray by index), with values of i 0 through 3
    for (let i = 0; i < sourceArray.length; i++){
        negatives.push(-1 * sourceArray[i])
    }
    return negatives
}

function mapToNoChange(sourceArray){
    let names = []
    for (let i=0; i < sourceArray.length; i++){
        names.push(sourceArray[i])
    }
    return names
}

function mapToDouble(sourceArray){
    let doubled = []
    for (let i=0; i < sourceArray.length; i++){
        doubled.push(2 * sourceArray[i])
    }
    return doubled
}

function mapToSquare(sourceArray){
    let squared =  []
    for (let i=0; i < sourceArray.length; i++){
        squared.push(sourceArray[i] ** 2)
    }
    return squared
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i=0; i < sourceArray.length; i++){
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for (let i=0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i=0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}