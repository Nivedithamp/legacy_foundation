const express = require('express');
const { getResponsesByContext } = require('../controllers/conversationController');
const router = express.Router();

router.get('/responses', getResponsesByContext);

module.exports = router;
