const array = [1, 2, 3, -9];

function mapToNegativize(array){
    let negativeArray = [];
    for(const element of array){
       negativeArray.push(element * (-1));
    }
    return negativeArray;
}

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){
    let doubleArray = [];
    for(const element of array){
        doubleArray.push(element * 2);
    }
    return doubleArray;
}

function mapToSquare(array){
    let squareArray = [];
    for(const element of array){
        squareArray.push(element * element);
    }
    return squareArray;
}

function reduceToTotal(array, start = 0){
    let total = start;
    for(const element of array){
        total += element;
    }
    return total;
}

function reduceToAllTrue(array){
    for(const element of array){
        if (!element){
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(array){
    for(const element of array){
        if (element){
           return true;
        }
    }
    return false;
}
