//NOT WORKING UNSURE WHY PLEASE HELP

const express = require("express"); 
const cors = require("cors");
const app = express(); 

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(cors())
const ex2 = require("./Routes/Exercise 5.2")
app.use(`/api/ex2`, ex2)

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
 );

const port = 3000; 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

