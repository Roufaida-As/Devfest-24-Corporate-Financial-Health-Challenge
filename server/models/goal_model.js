const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    goalDescription: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    deadline: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'USER', required: true },
}, { timestamps: true });

module.exports = mongoose.model('GOAL', goalSchema);
