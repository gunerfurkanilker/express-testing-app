const productSchema = require('./schemas/productSchema')
const productTransferSchema = require('./schemas/productTransferSchema')
const mongoose = require("mongoose");
exports.productTransferSchemaInstance = new mongoose.model('ProductTransfer', productTransferSchema);
exports.productSchemaInstance = new mongoose.model('Product', productSchema);


exports.getProductTransfer = async (req) => {

    if(req.params.productId){
        return await this.productTransferSchemaInstance.find({productId: req.params.productId})
    }
    else{
        return await this.productTransferSchemaInstance.find();
    }

};

exports.createProductTransfer = async (req) => {
    let product = await this.productSchemaInstance.findById(req.params.productId)
    if(!product)
        throw new Error("Product Not Found!")
    else {
        if (req.body.transferType === 'Import'){
            product.productAmount = product.productAmount + req.body.transferAmount;
            product.save();
        }
        else if(req.body.transferType === 'Export'){
            if (product.productAmount < req.body.transferAmount)
                throw new Error("Insufficient Stock!")
            product.productAmount = product.productAmount - req.body.transferAmount;
            product.save();

        }
    }

    return await this.productTransferSchemaInstance.create({
        productId: req.params.productId,
        transferDescription: req.body.transferDescription,
        transferAmount: req.body.transferAmount,
        transferType: req.body.transferType
    });

};