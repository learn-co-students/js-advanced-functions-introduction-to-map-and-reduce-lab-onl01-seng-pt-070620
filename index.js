// Your code here
function mapToNegativize(sourceArray){
    let arr = []
    sourceArray.forEach(element => {
        arr.push(element * -1)
    })
    return arr
}

function mapToNoChange(sourceArray){
    let arr = []
    sourceArray.forEach(element => {
        arr.push(element)
    })
    return arr
}

function mapToDouble(sourceArray){
    let arr = []
    sourceArray.forEach(element => {
        arr.push(element * 2)
    })
    return arr
}

function mapToSquare(sourceArray){
    let arr = []
    sourceArray.forEach(element => {
        arr.push(element * element)
    })
    return arr
}

function reduceToTotal(sourceArray, startingPoint= 0){
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
        total = sourceArray[i] + total;
    }
    return total
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }