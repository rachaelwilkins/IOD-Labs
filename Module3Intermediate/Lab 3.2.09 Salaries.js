/* Given the below salaries object, perform the following tasks.
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary */

const { max } = require("moment");


let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
  };


function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    } 
    return sum; 
  }
  
console.log( sumSalaries(salaries) ); //233,000 



