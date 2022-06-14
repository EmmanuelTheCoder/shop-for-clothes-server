const mongoose = require('mongoose');



const DetailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: false
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
    },
    visitorId:{
        type: {},
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model("Detail", DetailSchema)