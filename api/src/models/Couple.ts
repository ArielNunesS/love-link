import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CoupleSchema = new mongoose.Schema ({
    name: {type: String, required: true, maxLength: 20},
    slug: {type: String},
    email: {type: String, required: true, maxLength: 120},
    title: {type: String, required: true, maxLength: 20},
    message: {type: String, required: true, maxLength: 1500},
    startDate: {type: Date, required: true},
    image: {type: [String], required: true},
    background: {type: String, required: true, default: "rose"},
});

const Couple = model("Couple", CoupleSchema);
export default Couple;