let primalityTest = (p) => {
    if(p > 2){
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

let counterPrimes = (n) => {
    let counter = 0;
    let output;
    for(let i = 1; counter <= n; i++){
        if(primalityTest(i)){
            counter = counter + 1
            
        } 
        if(counter === n+1){
            output = i
        }
        

    }
    return output
}

console.log(counterPrimes(10001))

