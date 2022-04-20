const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes")
connectDB()
const app = express();

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRoutes)

//home route
app.get("/", (req, res)=>{
    res.json("<h1>WELCOME TO OUR SCHOOL API<H1>")
    })

const PORT = process.env.PORT||6000

app.listen(PORT, ()=>{
    console.log("server is active")
})
