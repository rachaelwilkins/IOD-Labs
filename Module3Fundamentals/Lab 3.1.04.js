// 3.4 Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10'

console.log(result);

// the += operator performs addition on the two variables and assigns a result. 