// Using the functions you created for Exercise 4, write a specification comment for each function, write at least 3 unit tests for each function. In the unit tests, try to include both expected and non-typical test values (such as zero or negative numbers)

// Add Function 
function myFunctionAdd(p1, p2) {
    return p1 + p2
  }
  console.log(myFunctionAdd(8, 2))

// Tests 
console.log(myFunctionAdd(8, 2)) //expected answer 10, tested result: 10
console.log(myFunctionAdd(8, -2)) //expected answer: 6, tested result: 6
console.log(myFunctionAdd(0, 2)) //expected answer: 2, tested result: 2


// Times Function - 
function myFunctionTimes(p1, p2) {
    return p1 * p2
  }
  console.log(myFunctionTimes(8, 2))

// Tests 
console.log(myFunctionTimes(8, 2)) //expected answer 16, tested result: 16
console.log(myFunctionTimes(8, 0)) //expected answer: 0, tested result: 0
console.log(myFunctionTimes(8, 22)) //expected answer: 176, tested result: 176 


// Sub Function
function myFunctionSub(p1, p2) {
    return p1 - p2
}   
console.log(myFunctionSub(8, 2))

// Tests 
console.log(myFunctionSub(8, 2)) //expected answer: 6, tested result: 6
console.log(myFunctionSub(8, 12)) //expected answer: -4, tested result: -4 
console.log(myFunctionSub(8, 0)) //expected answer: 8, tested result: 8


// Div Functions
function myFunctionDiv(p1, p2) {
    return p1 / p2
} 
console.log(myFunctionDiv(8, 2))

// Tests 
console.log(myFunctionDiv(8, 2)) //expected answer: 4, tested result: 4
console.log(myFunctionDiv(8, 12)) //expected answer: 0.66667, tested result: 0.66667
console.log(myFunctionDiv(16, 4)) //expected answer: 4, tested result: 4

