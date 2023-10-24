const express = require('express');
const { createNft } = require('../controllers/nfts.controller');
const router = express.Router();



router.post('/',createNft)







module.exports = router;
