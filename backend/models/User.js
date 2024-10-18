const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    otp: String,
    otpExpiry: Date,
    otpVerified: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;

