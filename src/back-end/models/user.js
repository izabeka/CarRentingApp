//kolekcja użytkownika
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    confirmPassword: {
        type: String,
        minlength: 8,
        maxlength: 1024,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    isAdmin: Boolean
})
const User = mongoose.model('User', userSchema);

//validacja

function validateUser(user){
    const schema = {
        login: Joi.string().min(3).max(50).required(),
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(100).required().unique('user.emailAdress').email(),
        password: Joi.string().min(8).max(255).required(),
        confirmPassword: Joi.ref('password')
    }

    return Joi.validate(user, schema);
}

//exportowanie

exports.User = User;
exports.validateUser = validateUser;
