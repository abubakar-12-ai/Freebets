// === models/Withdrawal.js ===
// Mongoose schema for withdrawal requests.

const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount:    { type: Number, required: true },
  status:    { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema);
