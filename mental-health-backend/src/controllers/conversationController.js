const Conversation = require('../models/Conversation');

const getResponsesByContext = async (req, res) => {
  try {
    const { context } = req.query;
    const conversations = await Conversation.find({
      Context: new RegExp(context, 'i'),
    });
    const responses = conversations.map(conv => conv.Response);
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getResponsesByContext };
