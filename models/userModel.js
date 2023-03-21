const userSchema = require('./schemas/userSchema')
const mongoose = require("mongoose");
exports.userSchemaInstance = new mongoose.model('User', userSchema);


exports.getUser = async (req) => {

    if(req.params.id){
        return await this.userSchemaInstance.findById(req.params.id)
    }
    if(req.body.email || req.body.password){
        return await this.userSchemaInstance.findOne({
            $or: [
                {
                    username: req.body.username,
                },
                {
                    email: req.body.email
                }
            ]
        })
    }
    else{
        return await this.userSchemaInstance.find();
    }

};

exports.createUser = async (req) => {

    return await this.userSchemaInstance.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

};

exports.updateUser = async (req) => {

    return await this.userSchemaInstance.findOneAndUpdate({_id: req.params.id},{
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

};

exports.deleteUser = async (req) => {
    return await this.userSchemaInstance.findOneAndDelete({
        _id: req.params.id
    })
};