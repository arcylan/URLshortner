const express = require('express');
const {genreateNewShortUrl,analyticsViewer} = require('../controllers/url')
const router = express.Router();

router.post('/',genreateNewShortUrl);
router.get('/analytics/:shortId',analyticsViewer);

module.exports = router;