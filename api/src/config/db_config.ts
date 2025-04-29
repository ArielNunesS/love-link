import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect("mongodb://localhost:27017/love-link");
        console.log("Mongo DB connected successfully");
    } catch (err) {
        console.error("Mongo DB connection error:", err);
        process.exit(1);
    }
}