//npm init --y
//npm install
//npm i express nodemon body-parser

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

const port = 8080;

app.use(bodyParser.json());
app.use("/api", router);

app.get("/",(req,res) => res.send("server is running"));
// app.all("*", (req, res) => res.send("That route does not exist"))


app.listen(port,() =>
console.log(`Jensen utb server is listening on port: ${port}`)
);





