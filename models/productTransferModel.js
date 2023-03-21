const productTranferSchema = require('./schemas/productTransferSchema')
const mongoose = require("mongoose");
exports.productTransferSchemaInstance = new mongoose.model('ProductTransfer', productTranferSchema);


exports.getProductTransfer = async (req) => {

    if(req.params.productId){
        return await this.productTransferSchemaInstance.find({productId: req.params.productId})
    }
    else{
        return await this.productTransferSchemaInstance.find();
    }

};

exports.createProductTransfer = async (req) => {

    return await this.productTransferSchemaInstance.create({
        productId: req.params.productId,
        transferDescription: req.body.transferDescription,
        transferAmount: req.body.transferAmount,
        transferType: req.body.transferType
    });

};