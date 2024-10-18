const mongoose = require("mongoose")
const TransactionSchema = new mongoose.Schema({
    type: { type: String, enum: ['income', 'expense'], required: true },
    amount: { type: Number, required: true },
    category: String,
    description: String,
    date: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'USER' },
});
exports.module = mongoose.model('TRANSACTION', TransactionSchema)
