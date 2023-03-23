const productModel = require('./../../models/productModel')

exports.getProduct = async (req,res) => {

    try{
        const result = await productModel.getProduct(req);
        res.status(200);
        res.json({
            status: true,
            data: result,
            code: 200
        })
    }catch (err) {
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }

}

exports.createProduct = async (req,res) => {
    try {
        const result = await productModel.createProduct(req);
        res.status(201);
        res.json({
            status: 'success',
            data: result,
            message: 'Product is successfully created!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }

}

exports.updateProduct = async (req,res) => {
    try {
        await productModel.updateProduct(req);
        res.status(200);
        res.json({
            status: 'success',
            message: 'Product is successfully updated!'
        })
    }catch (err){

        res.status(400);
        res.json({
            status: 'failed',
            message: 'Test'
        })
    }
}

exports.deleteProduct = async (req,res) => {

    try {
        await productModel.deleteProduct(req);
        res.status(204);
        res.json({
            status: 'success',
            message: 'Product is successfully deleted!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }
}