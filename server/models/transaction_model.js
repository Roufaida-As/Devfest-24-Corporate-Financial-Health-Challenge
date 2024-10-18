const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    enum: ['salary', 'food', 'materials', 'services', 'travel', 'marketing', 'utilities', 'rent', 'supplies', 'investments', 'sales'], 
    required: true
  }, description: String,
  date: { type: Date, default: Date.now, required: true },
  company: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'USER' },
});

module.exports = mongoose.model('Transaction', TransactionSchema)
