function mapToNegativize(sourceArray) {
    let result = [];
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * (-1))
    }
    return result
}

function mapToNoChange(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
}


function mapToDouble(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] * 2)
    }
    return result
}

function mapToSquare(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] * data[i])
    }
    return result
}

// reduce!!!

function reduceToTotal(sourceArray) {
    let sum = 0;
    for (let i in sourceArray) { sum += sourceArray[i]; }
    return sum
}

// function reduceToTotal(sourceArray, startingPoint) {
//     let sum = 0;
//     for (let i in sourceArray) { sum += sourceArray[i]; }
//     let finalSum = sum + parseInt(startingPoint)
//     return finalSum
// }

function reduceToTotal(sourceArray, startingPoint = 0){
    const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(reducer, startingPoint)
}

// function reduceToAllTrue(arr) {
//     for (let i = 0; i < arr.length; i++ ) {
//       if (!!arr[i] == true) {
//           return true
//       }
//       else {
//           return false
//       }
//     }
// }

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray.includes(true)) {
            return true
        }
        else {
            return false
        }
    }
}