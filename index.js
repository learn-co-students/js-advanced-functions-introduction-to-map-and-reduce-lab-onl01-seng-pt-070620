// Your code here
function mapToNegativize(arr){
  let negArr = []

  for (let i = 0; i < arr.length; i++){
    negArr.push(arr[i] * -1)
  }
  return negArr
}

function mapToNoChange(arr) {
  let newArr = []

  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr){
  let dubArr = []

  for (let i = 0; i < arr.length; i++){
    dubArr.push(arr[i] * 2)
  }
  return dubArr
}


function mapToSquare(arr) {
  let sqArr = []

  for(let i = 0; i < arr.length; i++) {
    sqArr.push(arr[i] ** 2)
  }
  return sqArr
}

function reduceToTotal(arr, init = 0) {
  let total = init
  for(let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  let truArr = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === false) {
      return false
    }
  }
      return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            return true
        }
    }
    return false
}
