let isPalindrome = (word) => {
    let cardinality = parseInt((word.length / 2) - 1);
    let isTrue = true
    for(let i = 0; i <= cardinality; i++){
        if(word[i] !== word[(word.length -1) -i]){
            isTrue = false
        }
    }
    return isTrue

}

let largestPalindromeProduct = () => {
    let b = 100
    let largestPalindrome = 0;
    let test;
    
    for(let a = 100; a <= 999; a++){
        test = a*b
        console.log(largestPalindrome)
        if(isPalindrome(test.toString()) === true && test > largestPalindrome){
            largestPalindrome = test
        }
        if(a === 999 && b !== 999){
            b = b+1
            a = 100
        }
    }

    
}

largestPalindromeProduct()
