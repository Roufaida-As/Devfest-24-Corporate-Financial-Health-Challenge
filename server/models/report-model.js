const mongoose = require("mongoose")
const ReportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['monthly', 'yearly', 'custom'], required: true },
    generatedAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'USER' },
    data: Object, // Store report details
});
