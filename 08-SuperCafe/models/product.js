const {Schema, model} = require('mongoose');

productSchema = new Schema({
    nombre: String,
    unitPrice: Number,
    category: mongoose.ObjectId,
    available: boolean,
    user: mongoose.ObjectId
})