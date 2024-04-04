// 3.5 Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

//function getGreeting(name) {
//    return 'Hello ' + name + '!';
//    }

// function expression syntax
const getGreeting = function() {
    console.log("Hello, Layne!");
  };
  
  getGreeting(); // Hello, Layne! 



// arrow function syntax
const getGreeting = name => {
    console.log(`Hello, ${name}!`);
      };
      
    getGreeting('Layne'); // Hello, Layne!
