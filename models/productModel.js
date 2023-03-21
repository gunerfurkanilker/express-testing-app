const productSchema = require('./schemas/productSchema')
const mongoose = require("mongoose");
exports.productSchemaInstance = new mongoose.model('Product', productSchema);

exports.getProduct = async (req) => {

    if(req.params.id){
        return await this.productSchemaInstance.findById(req.params.id)
    }
    else{
        return await this.productSchemaInstance.find();
    }

};

exports.createProduct = async (req) => {

    return await this.productSchemaInstance.create({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productCode: req.body.productCode,
        productAmount: req.body.productAmount
    });

};

exports.updateProduct = async (req) => {

    return await this.productSchemaInstance.updateOne({_id: req.params.id},{
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productCode: req.body.productCode,
        productAmount: req.body.productAmount
    });

};

exports.deleteProduct = async (req) => {
    return await this.productSchemaInstance.findOneAndDelete({
        _id: req.params.id
    })
};