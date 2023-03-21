const userModel = require("../../models/userModel");

exports.getUser = async (req,res) => {

    try{
        const result = await userModel.getUser(req);
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

exports.createUser = async (req,res) => {
    try {
        const result = await userModel.createUser(req);
        res.status(201);
        res.json({
            status: 'success',
            data: result,
            message: 'User is successfully created!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }

}

exports.updateUser = async (req,res) => {

    try {
        await userModel.updateUser(req);
        res.status(200);
        res.json({
            status: 'success',
            message: 'User is successfully updated!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }
}

exports.deleteUser = async (req,res) => {

    try {
        await userModel.deleteUser(req);
        res.status(204);
        res.json({
            status: 'success',
            message: 'User is successfully deleted!'
        })
    }catch (err){
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }
}