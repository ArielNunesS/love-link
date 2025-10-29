import mongoose, { mongo } from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new mongoose.Schema({
    reference_id: {type: String},
    couple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Couple",
        required: true,
    },
    status: {type: String},
    amount: {type: Number},
    paymentMethod: { type: String, enum: ["PIX", "CREDIT_CARD", "DEBIT_CARD", null]},
    createdAt: {type: Date},
    updatedAt: {type: Date},

}, {timestamps: true});

OrderSchema.pre("save", function(next) {
    this.updatedAt = new Date();
    next();
})

const Order = model("Order", OrderSchema);
export default Order;