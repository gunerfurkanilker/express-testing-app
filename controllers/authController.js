const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

exports.login = async (req, res) => {

    try{
        const user = await userModel.getUser(req)
        if(!user){
            res.status(400);
            return res.json({
                status: 'failed',
                message: 'Username-email or password incorrect. Please check your credentials!'
            })
        }
        const passwordCheck = await bcrypt.compare(req.body.password,user.password);
        if(!passwordCheck){
            res.status(400);
            return res.json({
                status: 'failed',
                message: 'Username-email or password incorrect. Please check your credentials!'
            })
        }
        const token = await jwt.sign({id: user._id},process.env.JWT_SECRET,{ expiresIn: '5h' });
        res.status(200)
        res.json({
            status: 'success',
            message: 'Login successful!',
            data: token
        })

    }catch (err) {
        res.status(400);
        res.json({
            status: 'failed',
            message: err.message
        })
    }


}