
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(8080, () => {
console.log("Jensen YH Båmi-server is running!");
});


