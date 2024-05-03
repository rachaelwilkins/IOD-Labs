const express = require('express')

const app = express()

const app2 = express()

const app3 = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
   })

app2.get('/hello', (req, res) => {
    res.send('Hello Sun!')
   })   

app3.get('/bye', (req, res) => {
    res.send('Bye Moon!')
   })   

app.listen(port, () => {
    console.log(`First app listening at http://localhost:${port}`)
   })    

app2.listen(port, () => {
    console.log(`Second app listening at 3001`)
   }) 

app3.listen(port, () => {
    console.log(`Second app listening at 3002`)
   })    