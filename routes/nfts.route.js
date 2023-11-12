const express = require('express');
const { createNft, getNft, delete_An_nft } = require('../controllers/nfts.controller');
const router = express.Router();



router.post('/',createNft)
router.get('/',getNft)
router.delete('/',delete_An_nft)




module.exports = router;
