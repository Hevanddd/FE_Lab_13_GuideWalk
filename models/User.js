const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    username:  {type: String, required: true, unique: true},
    user_routes: [{ type: Types.ObjectId, ref: 'Route' }],
    saved_routes: [{ type: Types.ObjectId, ref: 'Route' }]
});

module.exports = model('User', schema);