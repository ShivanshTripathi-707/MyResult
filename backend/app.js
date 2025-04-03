require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000
const cors = require("cors");
const routes = require("./routes/index")
const connectDB = require("./config/db");

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors())

// initializing database
connectDB()

// api end point
app.use("/api", routes);

app.get("/", (req,res)=>{
    res.send("hello from backend")
})

app.listen(port, ()=>{console.log("app started on the port " + port)})