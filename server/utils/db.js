const mongoose = require("mongoose");

// mongoose.connect(URI);
const URI= process.env.MONGODB_URI;
const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to database");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(0);
    }
};
//this function is returning process bcs of waiting(await)

module.exports= connectDb;