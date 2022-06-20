import mongoose from "mongoose";
import { DB_CONNECTION_URL } from "./env.js";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_CONNECTION_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
