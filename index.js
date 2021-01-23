// Your code here
const mapToNegativize = function(arr) {
    let toReturn = [];
    for( let element of arr ) {
      toReturn.push(element * -1);
    }
    return toReturn;
  }
  const mapToNoChange = function(arr) {
    let toReturn = [];
    for(let element of arr ) {
      toReturn.push(element)
    }
    return toReturn;
  }
  const mapToDouble = function(arr) {
    let toReturn = [];
    for( let element of arr ) {
      toReturn.push(element * 2);
    }
    return toReturn;
  }
  const mapToSquare = function(arr) {
    let toReturn = [];
    for( let element of arr ) {
      toReturn.push(element ** 2);
    }
    return toReturn;
  }
  const reduceToTotal = function(arr, base=0){
    for( let element of arr ){
      base += element;
    }
    return base;
  }
  const reduceToAllTrue = function(arr) {
    let returnValue = true;
    for( let element of arr ){
      if(!element) {
        returnValue = false;
      }
    }
    return returnValue;
  }
  const reduceToAnyTrue = function(arr) {
    let returnValue = false;
    for( let element of arr ){
      if(element){
        returnValue = true;
      }
    }
    return returnValue;
  }