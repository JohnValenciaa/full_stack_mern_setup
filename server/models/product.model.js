const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        min: [1, "Gotta do better than just a dollar://"],
        max: [1501, "Highest we'll sell for is 1500."]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);

