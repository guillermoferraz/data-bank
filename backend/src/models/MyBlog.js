const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
        
    },
    article: {
        type: String,
        required: true,
    },
    date: {
        type: Date, 
        default: Date.now,
    },
    user: {
        type: String
    }
});
module.exports = model('Blog', blogSchema);