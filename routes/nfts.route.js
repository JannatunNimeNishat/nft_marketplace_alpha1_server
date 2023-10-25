const express = require('express');
const { createNft, getNft } = require('../controllers/nfts.controller');
const router = express.Router();



router.post('/',createNft)
router.get('/',getNft)





module.exports = router;
