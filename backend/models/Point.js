const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    location: [{ type: Number, required: true }, { type: Number, required: true }],
    description: { type: String, required: true },
});


module.exports = model('Point', schema);