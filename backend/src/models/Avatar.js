const { Schema, model } = require('mongoose');

const avatarSchema = new Schema({
    filename: { type: String, unique: true },
    originalname: { type: String, unique: true },
    path: { type: String, unique: true },
    miemetype: { type: String, unique: true },
    size: { type: Number, unique: true },
    user: { type: String },
    creted_at: { type: Date, default: Date.now() },

},{
    timestamps: true
});

module.exports = model('Avatar', avatarSchema)