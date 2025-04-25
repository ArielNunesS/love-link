import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect("mongodb://localhost:27017/love-link");
        console.log("Mongo DB connected successfully");
    } catch (error) {
        console.error("Mongo DB connection error:", error);
        process.exit(1);
    }
}