// Your code here

function mapToNegativize(array) {
    let neg = []
    for (let i = 0; i < array.length; i++ ){ 
        neg.push(array[i] * -1)
    }
    return neg
    }

function mapToNoChange(array) {
    let same = []
    for (let i = 0; i < array.length; i++ ){ 
        same.push(array[i])
    }
    return same
}
function mapToDouble(array) {
    let dub = []
    for (let i = 0; i < array.length; i++ ){ 
        dub.push(array[i] * 2)
    }
    return dub
}
function mapToSquare(array) {
    let コ = []
    for (let i = 0; i < array.length; i++ ){ 
        コ.push(array[i] * array[i])
    }
    return コ
}
const reduceToTotal = function (array, start=0) {
    for (let i = 0; i < array.length; i++ ){ 
        start = start + array[i]
    }
    return start
}
function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ){ 
        if (array[i] == false){
            return false
        }
    }
    return true
}
function reduceToAnyTrue(array) {
        for (let i = 0; i < array.length; i++ ){ 
            if (array[i] == true){
                return true
            }
        }
        return false
}
