const express = require('express');

// const {limiter} = require('../middlewares/api.security')

const { saveUser, getUser } = require('../controllers/users.controller');
const { verifyJWT } = require('../middlewares/verifyJWT');

const router = express.Router();




router.post('/', saveUser);

// router.get('/:email',limiter,getUser)

router.post('/getSingleUser', verifyJWT, getUser)


module.exports = router;