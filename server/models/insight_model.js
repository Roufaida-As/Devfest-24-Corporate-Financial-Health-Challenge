const mongoose = require('mongoose')
const InsightSchema = new mongoose.Schema({
    message: String,
    impact: String,
    date: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'USER' },
});

exports.module = mongoose.model('INSIGHT', InsightSchema)
