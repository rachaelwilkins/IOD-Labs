const express = require("express")

const router = express.Router()

router.get("/Add", (req, res) => {
    //console.log(req)
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2
    res.status = 200
    res.send({result: sum})
})

router.get("/Multiply", (req, res) => {
    //console.log(req)
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 * num2
    res.status = 200
    res.send({result: sum})
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