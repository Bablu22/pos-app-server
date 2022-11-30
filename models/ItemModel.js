const mongoose = require("mongoose")


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: Number
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item

