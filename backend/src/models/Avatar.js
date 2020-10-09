const { Schema, model } = require('mongoose');

const avatarSchema = new Schema({
    filename: { type: String},
    originalname: { type: String},
    path: { type: String},
    miemetype: { type: String},
    size: { type: Number },
    user: { type: String },
    creted_at: { type: Date, default: Date.now() },

},{
    timestamps: true
});

module.exports = model('Avatar', avatarSchema)