const express = require("express")
const myCalculatorController = require("../Controllers/calculatorController")
const router = express.Router()

router.get("/Add", (req, res) => {
    //console.log(req)
    myCalculatorController.Add(req, res)
})

router.get("/Multiply", (req, res) => {
    //console.log(req)
    myCalculatorController.Multiply(req, res)
})

router.get("/Subtract", (req, res) => {
    //console.log(req)
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 - num2
    res.status = 200
    res.send({result: sum})
})

router.get("/Divide", (req, res) => {
    //console.log(req)
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 / num2
    res.status = 200
    res.send({result: sum})
})

module.exports = router 