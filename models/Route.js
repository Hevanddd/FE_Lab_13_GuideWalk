const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    focus: { type: String, required: true },
    description: { type: String, required: true },
    points: [{type: Types.ObjectId}],
    creation_date: {type: Date, default: Date.now, required: true},
    rating: { type: Number, default: 0, required: true },
    userRateIds: [{type: Types.ObjectId}],
    ownerName: {type: String, required: true}
});

module.exports = model('Route', schema);