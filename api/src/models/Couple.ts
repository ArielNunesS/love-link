import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CoupleSchema = new mongoose.Schema ({
    name: {type: String, required: true, maxLength: 15},
    email: {type: String, required: true, maxLength: 150, unique: true},
    title: {type: String, required: true, maxLength: 13},
    message: {type: String, required: true, maxLength: 680},
    startDate: {type: String, required: true},
    image: {type: String, required: true},
});

const Couple = model("Couple", CoupleSchema);
export default Couple;