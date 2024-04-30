const express = require('express')

const app = express()

const app2 = express()

const app3 = express()

const port = 3000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app2.get('/hello', (req, res) => { 
    res.send('Hello Moon!')
})

app3.get('/bye', (req, res) => { 
    res.send('Bye Sun!')
})

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})

app2.listen(3002, () => {
    console.log(`Second server application is running on 3002`)
})

app3.listen(3003, () => {
    console.log(`Third server application is running on 3003`)
})   