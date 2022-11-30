const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        subTotal: {
            type: Number,
            required: true,
        },
        tax: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        method: {
            type: String,
            required: true,
        },
        cartItem: {
            type: Array,
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
