function mapToNegativize(source) {
    let negative = [];

    for (let i = 0; i < source.length; i++) {
        negative.push(-(source[i]));
}
    return negative;
}

function mapToNoChange(source) {
    let negative = [];

    for (let i = 0; i < source.length; i++) {
        negative.push(-(source[i]));
}
    return source;
}

function mapToDouble(source) {
    let doubled = [];

    for (let i = 0; i < source.length; i++) {
        doubled.push((source[i] * 2));
    }

    return doubled;
}

function mapToSquare(source) {
    let squared = [];

    for (let i = 0; i < source.length; i++) {
        squared.push(source[i] * source[i]);
    }

    return squared;
}

function reduceToTotal(source, startingPoint=0) {
    let total = startingPoint;

    for (let i = 0; i < source.length; i++) {
        total = total + source[i];
    }

    return total;
}

function reduceToAllTrue(source) {
    for (let i = 0; i < source.length; i++) {
       if (!source[i]) return false;
    }
    return true
}

function reduceToAnyTrue(source) {
    for (let i = 0; i < source.length; i++) {
        if (source[i]) return true;
    }
    return false;
}