const userSchema = require('./schemas/userSchema')
const mongoose = require("mongoose");
exports.userSchemaInstance = new mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');

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
    if((req.body.newPassword !== "" && req.body.newPassword !== null && req.body.newPassword !== undefined) &&
        (req.body.currentPassword !== "" && req.body.currentPassword !== null && req.body.currentPassword !== undefined)){
        const user = await this.userSchemaInstance.findById(req.params.id)
        if(!user){
            throw new Error("User Not Found")
        }
        const passwordCheck = await bcrypt.compare(req.body.currentPassword,user.password);
        if(!passwordCheck){
            throw new Error("Current password is not matched our records! In order to change password you must type your current password correctly!")
        }
        const cryptedNewPassword = await bcrypt.hash(req.body.newPassword,10);
        return await this.userSchemaInstance.findOneAndUpdate({_id: req.params.id},{
            name: req.body.name,
            username: req.body.username,
            password: cryptedNewPassword,
            email: req.body.email
        });
    }
    return await this.userSchemaInstance.findOneAndUpdate({_id: req.params.id},{
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    });

};

exports.deleteUser = async (req) => {
    return await this.userSchemaInstance.findOneAndDelete({
        _id: req.params.id
    })
};