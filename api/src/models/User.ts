import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
});

const User = model("User", UserSchema);
export default User;