import express from 'express';
import dotenv from "dotenv";
//const cors = require('cors');
import cors from 'cors';
//const jose = require("jose");
//import jose from 'jose';

import connectToDatabase from "./database/dbConnect.js";
import routes from "./routes/routes.js";
//const bcrypt = require("bcrypt");

//import path from "path";
//import bodyParser from "body-parser";

// Loading the environment
dotenv.config();

var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  }));
 
// Middleware for serving static files  
app.use(express.static('public'));

/* 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
    
  // Fallback route to return to index
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} */



/* // Import routes for users and products
const usersRouter = require('./routes/api/usersRouter.js');
const productsRouter = require('./routes/api/productsRouter.js');

// Mount the usersRouter at /api/users
app.use('/api/users', usersRouter);
// Mount the productsRouter at /api/products
app.use('/api/products', productsRouter); */

// Routes
app.use("/", routes);


// Connect to the database
const connection = await connectToDatabase();
// Handle database connection errors
connection.on("error", (error) => {
  console.error("Database connection error:", error);
});

// Handle successful database connection
connection.once("open", () => {
  console.log("Database connection successful");
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
