import mongoose from "mongoose";
export const ConnectDb = async() => {
    await mongoose.connect('mongodb://localhost:27017/todoApp')
    console.log(`MogoDB is Connected with ${mongoose.connection.host}`);
} 