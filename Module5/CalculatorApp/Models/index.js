const express = require("express")
const cors = require('cors')
const app = express()

const app2 = express()

const myroutes = require('../Routes/myTestRoutes')

const myuserroutes = require('../Routes/userRoutes')

const port = 3004

const port2 = 3005

app.use(cors())
app.use('/Calculator', myroutes)

app2.use(cors())
app2.use(express.json();)
app2.use('/users', myuserroutes)



app.listen(port, ()=>{console.log("Server started on port 3004")});

app2.listen(port2, ()=>{console.log("Users Server started on port 3005")});