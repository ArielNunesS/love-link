import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/love-link");
        console.log("Mongo DB connected successfully");
    } catch (err) {
        console.error("Mongo DB connection error:", err);
        process.exit(1);
    }
}