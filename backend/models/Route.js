const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    focus: { type: String, required: true },
    description: { type: String, required: true },
    points: [{ type: Types.ObjectId, ref: 'Point' }],
    owner: { type: Types.ObjectId, ref: 'User' }
});

module.exports = model('Route', schema);