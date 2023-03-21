const productTransferModel = require("../../models/productTransferModel");

exports.getProductTransfer = async (req,res) => {

    try{
        const result = await productTransferModel.getProductTransfer(req);
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

exports.createProductTransfer = async (req,res) => {
    try {
        const result = await productTransferModel.createProductTransfer(req);
        res.status(201);
        res.json({
            status: 'success',
            data: result,
            message: 'Product transfer is successfully created!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }

}