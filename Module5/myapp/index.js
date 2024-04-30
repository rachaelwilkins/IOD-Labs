const express = require("express"); //importing express library/framework

const app = express(); //create an application 

const port = 3000; 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
