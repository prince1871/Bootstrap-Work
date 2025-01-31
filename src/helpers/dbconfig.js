const mongoose = require('mongoose');

// Connect to MongoDB database

const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/blog-api") 
    .then(() => {
        console.log("Connected to database successfully")}) 
    .catch (error => {
        console.log("Error connecting to database", error);
    });
}

module.exports = connectDb;

