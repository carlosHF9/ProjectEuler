let evenFibNumbers = (value) => {
  let evenSum = 0;
  let first = 0;
  let second = 1;
  let procedeFib = 0
  while(procedeFib < value){
    procedeFib = first + second;
    if(procedeFib%2 === 0){
      evenSum += procedeFib
    }
    first = second;
    second = procedeFib;
  }
  return evenSum
}


evenFibNumbers(4000000)
