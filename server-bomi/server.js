import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/",(req,res) => res.send("server is running"));
app.all("*", (req, res) => res.send("That route does not exist"))


app.listen(port,() =>
console.log(`Jensen utb server is listening on port: ${port}`)
);






// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";

// import userRoutes from "./routes/usersB.js";

// const app = express();
// const port = 8080;

// app.use(bodyParser.json());
// app.use(cors());

// app.use("/", userRoutes);

// app.get("/",(req,res) => res.send("server is running"));
// app.all("*", (req, res) => res.send("That route does not exist"))


// app.listen(port,() =>
// console.log(`Jensen server is listening on port: ${port}`)
// );