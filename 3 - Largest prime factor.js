let primalityTest = (value) => {
    let dividers = 1
    for(let i = value - 1; i > 0; i--){
        if(value%i === 0){
            dividers += 1
        }
    }
    return dividers > 2 ? false : true
}





let largestPrimeFactor = (value) => {
    let primeFactors = []
    let factorizing = value

    for(let i = 2; i <= factorizing; i++){
        console.log(factorizing)
        if(primalityTest(i) === true){
            while(factorizing%i === 0){
                primeFactors.push(i)
                factorizing = factorizing/i
                console.log(factorizing)
            }
        }
    }
    
    return primeFactors
}

console.log(largestPrimeFactor(600851475143))


