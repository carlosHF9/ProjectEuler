//n(n+1)(2n+1)/6
//n(n+1)/2

let squareOfSums = (n) => {
    return (n*(n+1)/2)**2
}

let sumOfSquares = (n) => {
    return (n*(n+1)*(2*n+1)/6)
}

let difference = (n) =>{
    return squareOfSums(n) - sumOfSquares(n)
}


console.log(difference(100))

