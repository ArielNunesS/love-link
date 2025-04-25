import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4},
    email: {type: String, required: true},
});

const User = model("User", UserSchema);

export default User;