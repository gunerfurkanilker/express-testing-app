const mongoose = require('mongoose'), Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: false
    },
    productCode: {
        type: String,
        required: true,
        unique: true
    },
    productAmount: {
        type: Number,
        default: 0
    }
})

module.exports = productSchema;