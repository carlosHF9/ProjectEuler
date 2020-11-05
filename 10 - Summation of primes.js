//Find the sum of all primes below two millions
let primalityTest = (p) => {
    if(p == 2){
        return true
    }
    else if(p > 2){
        for(let i = 2; i < p; i ++){
            if(p%i === 0){
                return false 
            }
        }
        return true
    } else {
        return false
    }
}

let summation = (limit) => {
    let summation = 2;
    for(let i = 3; i < limit; i++){
        if(i%2 == 1){
            if(primalityTest(i)){
                summation += i
            }
        }
    }

    return summation
}

console.log(summation(10))
