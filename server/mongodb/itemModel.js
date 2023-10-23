const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const ItemModel = mongoose.model('Item', itemSchema);

module.exports = ItemModel;