const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
            quantity: { type: Number, required: true, min: 1 },
        }
    ],
    addressId: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Pending" }, 
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);