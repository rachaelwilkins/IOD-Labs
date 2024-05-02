const express = require("express"); 
const cors = require("cors");
const app = express(); 
app.use(cors())
const ex2 = require("./Routes/Exercise 5.2")
app.use(`/api/ex2`, ex2)

const port = 3000; 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
