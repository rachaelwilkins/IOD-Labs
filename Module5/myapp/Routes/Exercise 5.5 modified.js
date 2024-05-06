const express = require("express")
const myCalculatorController = require("../Controllers/Exercise 5.5 calcController")
const router = express.Router()

router.get("/Add", (req, res) => {
    myCalculatorController.Add(req, res)
})

router.get("/Multiply", (req, res) => {
    myCalculatorController.Multiply(req, res)
})

router.get("/Subtract", (req, res) => {
    myCalculatorController.Subtract(req, res)
})

router.get("/Divide", (req, res) => {
    myCalculatorController.Divide(req, res)
})

module.exports = router 