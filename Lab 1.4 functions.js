/*
Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen. 
Create a function that takes the name of a person as an argument, and prints out “Hello <name>” to the console.
*/

function myFunctionAdd(p1, p2) {
  return p1 + p2
}
console.log(myFunctionAdd(8, 2))

function myFunctionTimes(p1, p2) {
  return p1 * p2
}
console.log(myFunctionTimes(8, 2))
    
function myFunctionSub(p1, p2) {
      return p1 - p2
}   
console.log(myFunctionSub(8, 2))
    
function myFunctionDiv(p1, p2) {
    return p1 / p2
} 
console.log(myFunctionDiv(8, 2))


function sayHello(name) {
console.log('Hello'+name)
}       
sayHello("Rachael")