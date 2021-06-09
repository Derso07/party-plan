const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true,
    },

    dates: {
        type: [Date],
        required: true,
        default: []
    }

    //category
});

mongoose.model('Service',ServiceSchema);