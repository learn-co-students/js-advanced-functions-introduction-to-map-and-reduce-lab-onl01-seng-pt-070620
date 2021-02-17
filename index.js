// Your code here
const array = [1, 2, 3, -9]


//  function mapToNegativize(array) {
//      let negativeArray = [];
//      for(let element of array) {
//          negativeArray.push(element * -1);
//      };
//      return negativeArray
//  }

function mapToNegativize(array) {
    let negativeArray = [];
    array.map(num => negativeArray.push(num * -1));
    return negativeArray
}

function mapToNoChange(array) {
    let noChange = [];
    array.map(n => noChange.push(n));
    return noChange
}

function mapToDouble(array) {
    let double = [];
    array.map(n => double.push(n * 2));
    return double

}

function mapToSquare(array) {
    let toSquare = [];
    array.map(n => toSquare.push(n * n));
    return toSquare
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let answer = sourceArray.reduce((acc, val) => acc + val, startingPoint);
    return answer
};

function reduceToAllTrue(sourceArray) {
    for(const element of sourceArray){
        if (!element){
            return false;
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(const element of sourceArray){
        if(element){
            return true;
        }
    }
    return false
}

// function reduceToTotal(array, start = 0){
//     let total = start;
//     for(const element of array){
//         total += element;
//     }
//     return total;
// }


