import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new mongoose.Schema({
    reference_id: {type: String},
    coupleData: {
        name: {type: String, required: true, maxLength: 20},
        slug: {type: String},
        email: {type: String, required: true, maxLength: 120},
        title: {type: String, required: true, maxLength: 20},
        message: {type: String, required: true, maxLength: 1500},
        startDate: {type: Date, required: true},
        image: {type: String, required: true},
        background: {type: String, required: true, default: "rose"},
    },
    status: {type: String},
    amount: {type: Number},
    paymentMethod: { type: String, enum: ["PIX", "CREDIT_CARD", "DEBIT_CARD", null]},
    createdAt: {type: Date},
    updatedAt: {type: Date},
}, {timestamps: true});

const Order = model("Order", OrderSchema);
export default Order;