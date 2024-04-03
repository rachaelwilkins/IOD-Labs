// 3.2 Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"

// what is the value of the following expressions?
let addition = 3 + 4 //34, incorrect, because it's concatenating the expression, implicit conversion doesn't happen when using + with two operands. To fix, put 3 and 4 as numerals.
let multiplication = three * four //12, correct
let division = three / four //0.75, correct
let subtraction = three - four //-1, correct 
let lessThan1 = three < four //true, correct 
let lessThan2 = thirty <! four //true, incorrect, because 30 comes before 4, given the 3 at the start of 30. To fix, add an exclamation mark to negate the expression. 

console.log(addition);
console.log(lessThan2);