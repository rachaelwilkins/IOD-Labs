const Calculator = require('./calculatorlibrary');
let myCalc = new Calculator()
myCalc.add(3,4)
myCalc.multiply(3,4)
myCalc.subtract(8,4)
myCalc.divide(8,4)

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)
    res.status(200)
    res.json({result:sum})
   }

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.multiply(number1,number2)
    res.status(200)
    res.json({result:sum})
   }
   
const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.subtract(number1,number2)
    res.status(200)
    res.json({result:sum})
   }      

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.divide(number1,number2)
    res.status(200)
    res.json({result:sum})
   }      
   
console.log();