const { Schema, model } = require('mongoose');

const listSchema = new Schema({
    objectPrimary:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: String,
        
    }
});
module.exports = model('List', listSchema);