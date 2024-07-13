const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  Context: String,
  Response: String,
});

module.exports = mongoose.model('Conversation', conversationSchema);
