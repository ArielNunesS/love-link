import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new mongoose.Schema({
    reference_id: {type: String},
    coupleId: {type: String},
    status: {type: String},
    amount: {type: Number},
    paymentMethod: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date},
}, {timestamps: true});

const Order = model("Order", OrderSchema);
export default Order;