let getA = (m, n) => {
    return (m**2) - (n**2)
}

let getB = (m, n) => {
    return 2*m*n
}

let getC = (m, n) => {
    return (m**2) + (n**2)
}


let pytagoreanTripletGenerator = (value) => {
    let sumOfValues;
    let product;
    let difference = 1;
    for(let i = 1; !sumOfValues; i++){
        if(getA(i+difference, i) + getB(i+difference, i) + getC(i+difference, i) === value ){
            sumOfValues = value
            product = getA(i+difference, i) * getB(i+difference, i) * getC(i+difference, i)
        }
        if(i === 100){
            i = 0;
            difference += 1
        }
    }
    return product
}

console.log(pytagoreanTripletGenerator(1000))