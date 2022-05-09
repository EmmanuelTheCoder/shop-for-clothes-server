const mongoose = require('mongoose');


const DetailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    cart: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("Detail", DetailSchema)