const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: false},
    location: {longitude: { type: Number, required: true }, latitude: { type: Number, required: true }},
    description: { type: String, required: true },
});


module.exports = model('Point', schema);