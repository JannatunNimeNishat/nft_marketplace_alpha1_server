const express = require('express');

// const {limiter} = require('../middlewares/api.security')

const { saveUser, getUser } = require('../controllers/users.controller');

const router = express.Router();




router.post('/', saveUser);
// router.get('/:email',limiter,getUser)
router.get('/:email',getUser)


module.exports = router;