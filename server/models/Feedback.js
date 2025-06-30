const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  stars: { type: Number, required: true },
  note: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
