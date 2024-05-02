const express = require("express")

const router = express.Router()

const myCalcController = require('../Exercise 5.6/calculatorController')

router.get('/Calculator/Add', (req, res)=> {myCalcController})

router.get('/Calculator/Multiply', (req, res)=> {myCalcController})

router.get('/Calculator/Subtract', (req, res)=> {myCalcController})

router.get('/Calculator/Divide', (req, res)=> {myCalcController})

module.exports = router;