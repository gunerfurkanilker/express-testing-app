const mongoose = require('mongoose'), Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})


const cryptPassword = async function (next) {
    if(this.password)
        this.password = await bcrypt.hash(this.password,10);
    next();
}

userSchema.pre('findOneAndUpdate',cryptPassword);
userSchema.pre('create',cryptPassword);
userSchema.pre('save',cryptPassword);



module.exports = userSchema;