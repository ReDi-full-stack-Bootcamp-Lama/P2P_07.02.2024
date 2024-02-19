// dbConnect.js
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const connectionString = process.env.DB_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("The DB_CONNECTION_STRING environment variable is not defined.");
    }
        
    await mongoose.connect(connectionString);
        
    console.log("Connected to the database successfully!");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
}

export default connectToDatabase;