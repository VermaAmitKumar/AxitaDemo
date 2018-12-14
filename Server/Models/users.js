const mongoose = require('mongoose');
const Validator = require('validator');
var user = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: Validator.isEmail,
            message: `{value} is not Valid`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token :{
            type: String,
            required: true
        }
    }]
});
module.exports = {
    user
};