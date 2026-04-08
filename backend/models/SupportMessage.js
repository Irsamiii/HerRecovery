const mongoose = require('mongoose');

const SupportMessageSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  message: String,
  isSOS: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ['pending', 'responding', 'resolved'], 
    default: 'pending' 
  },
  response: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportMessage', SupportMessageSchema);