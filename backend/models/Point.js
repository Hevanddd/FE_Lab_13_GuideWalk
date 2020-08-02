const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true},
    location: {lng: { type: Number, required: true }, lat: { type: Number, required: true }},
    description: { type: String, required: true },
});


module.exports = model('Point', schema);