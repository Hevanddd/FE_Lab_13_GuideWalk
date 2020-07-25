const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, 
    routes: [{ type: Types.ObjectId, ref: 'Route' }]
});

module.exports = model('User', schema);