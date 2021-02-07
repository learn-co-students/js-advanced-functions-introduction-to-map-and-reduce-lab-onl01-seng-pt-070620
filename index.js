// Your code here


function mapToNegativize(sourceArray) {
    let newArray = []
    for (let i=0; i < sourceArray.length; i++){
        newArray.push(-1 * sourceArray[i])
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i=0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for (let i=0; i < sourceArray.length; i++){
        newArray.push(2 * sourceArray[i])
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for (let i=0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (const element of sourceArray){
      total += element
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for(const element of sourceArray ){
        if (!element){
            return false;
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(const element of sourceArray ){
        if (element){
            return true;
        }
    }
    return false
}