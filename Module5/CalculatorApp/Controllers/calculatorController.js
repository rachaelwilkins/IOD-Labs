function Add(req, res)
{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2
    res.status = 200
    res.send({result: sum})
}

function Multiply(req, res)
{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 * num2
    res.status = 200
    res.send({result: sum})
}

function Subtract(req, res)
{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 - num2
    res.status = 200
    res.send({result: sum})
}

function Divide(req, res)
{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 / num2
    res.status = 200
    res.send({result: sum})
}
module.exports = {Add, Multiply, Subtract, Divide}