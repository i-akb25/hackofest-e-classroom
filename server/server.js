require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const cors=require("cors");

//let's tackle with cors policy
const corsOptions={
origin:"http://localhost:5173",
methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
credentials:true,
}
app.use(cors(corsOptions));
//middleware is used to ensure that there is no problem in getting json file as response or we can use json file in our code
//app.use(express.json());: This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.


app.use(express.json());

app.use("/api/auth", authRoute);     //restApi; //we  an use router after /api/auth on localhost
// "/" is default root page
//get is a http method to get the data from the server
app.use("/api/form", contactRoute);
app.use(errorMiddleware); //we're checking if it works and doesn't give any error before connecting to database

const Port = 5000;

connectDb().then(()=>{
    app.listen(Port,()=>{
        console.log(`Server is up on the port ${Port}`);
    });
}); //connecting database with backend;
