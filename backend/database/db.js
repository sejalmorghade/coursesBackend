import mongoose from "mongoose";

const mongoose = require("mongoose");
require("dotenv").config();  

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // Use env variable
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default connectDB