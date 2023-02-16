const {Schema, model} = require('mongoose');

categorySchema = new Schema({
    nombre: String,
    user: mongoose.ObjectId
})