const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api", router);

app.get("/",(req,res) => res.send("server is running"));

app.listen(PORT,() =>
    console.log(`Jensen YH server listening on : ${PORT}`)
);





