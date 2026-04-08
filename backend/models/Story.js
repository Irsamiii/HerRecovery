const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  title: { 
    type: String, 
    required: true,
    maxlength: 100
  },
  content: { 
    type: String, 
    required: true,
    maxlength: 5000
  },
  isAnonymous: { 
    type: Boolean, 
    default: true 
  },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    date: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  isApproved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Story', StorySchema);