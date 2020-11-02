/*function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let gdc = (greater, smaller) => {
    if(smaller > greater){
        return gdc(smaller, greater)
    }
    if(smaller%(greater%smaller) > 0){

        return gdc(smaller, greater%smaller)
    } else {
        return greater%smaller
    }
  
}
  
  
  
let fermatPrimalityTest = (n) =>{
    let a = getRandomArbitrary(2, n -1)
    
    if(gdc(a, n) !== 1){
        console.log('here at gdc')
        return false
    } else if((a**(n -1))%n !== 1){
        console.log('here at fermat')
        return false
    } else {
        console.log('here at rest')
        return true
    }
}


  
  
/*let getPrimeNumbers = () => {
    let counter = 0;
    let outputNumber;

    for(let i = 1; counter <= 20; i++){
      if(fermatPrimalityTest(i) === true){
          counter = counter + 1
          console.log(fermatPrimalityTest(i))
          
      }
      
    }
}*/

  
let primalityTest = (value) => {
    let dividers = 1
    for(let i = value - 1; i > 0; i--){
        if(value%i === 0){
            dividers += 1
        }
    }
    return dividers > 2 ? false : true
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
