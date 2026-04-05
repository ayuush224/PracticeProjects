const express = require('express');
const {
handleGiveUrl,
} = require('../controllers/url');

const router = express.Router();

router.get('/api', handleGiveUrl);

module.exports = router;