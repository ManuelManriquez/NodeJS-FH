const {Schema, model} = require('mongoose');

userSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    google: Boolean,
    role: String,
    img: String,
    status:Boolean
})