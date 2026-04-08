const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minlength: 3
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  recoveryData: {
    soberDays: { type: Number, default: 0 },
    lastCheckIn: Date,
    streak: { type: Number, default: 0 },
    milestones: [{
      date: Date,
      days: Number,
      celebration: String
    }]
  },
  safeCircle: [{
    name: String,
    relationship: String,
    phone: String,
    email: String,
    addedAt: { type: Date, default: Date.now }
  }],
  journalEntries: [{
    date: { type: Date, default: Date.now },
    content: String,
    mood: { 
      type: String, 
      enum: ['hopeful', 'anxious', 'strong', 'vulnerable', 'peaceful', 'struggling'] 
    }
  }]
});

module.exports = mongoose.model('User', UserSchema);