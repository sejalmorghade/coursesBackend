import mongoose from "mongoose";

const connectDB = async () => {
  try 
  {
    await mongoose.connect("mongodb+srv://sejal:SEJAL@cluster0.clnzs.mongodb.net/data")
    console.log("Database connection successful")
  }
  catch (error) 
  {
    console.error("Database connection failed:",error)
  }
}

export default connectDB