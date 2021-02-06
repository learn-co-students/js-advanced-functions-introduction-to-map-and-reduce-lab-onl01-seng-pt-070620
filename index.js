// Your code here
function mapToNegativize(arr){
    const negativized =  []
    for (let i=0; i < arr.length; i++){
        let negative = arr[i] * -1
        negativized.push(negative)
    }   
    return negativized
}

function mapToNoChange(arr){
  const noChange = []
  for (let i=0;i<arr.length;i++){
    noChange.push(arr[i])
  }
  return noChange
}

function mapToDouble(arr){
    const double = []
    for (let i=0;i<arr.length;i++){
        double.push(arr[i] * 2 )
    }
    return double
}

function mapToSquare(arr){
    const squared = []
     for (let i=0;i<arr.length;i++){
         squared.push(arr[i] * arr[i])
     }
    return squared
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

  function reduceToAllTrue(values){
      for (let i=0; i<values.length; i++){
          if (values[i] === false){
              return false 
          }
      }
      return true 
  }

  function reduceToAnyTrue(values){
    for (let i=0; i<values.length; i++){
        if (values[i]){
            return true
        }
    }
    return false
  }