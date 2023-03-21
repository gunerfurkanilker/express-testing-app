const mongoose = require('mongoose'), Schema = mongoose.Schema;

const productTransferSchema = new mongoose.Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    transferType: {
        type: String,
        enum: ['Import', 'Export'],
        required: true
    },
    transferDescription: {
        type: String,
        required: true
    },
    transferAmount: {
        type: Number,
        required: false
    }
})

module.exports = productTransferSchema;
