require('dotenv').config()
const jwt = require('jsonwebtoken');
const createJSONWebToken = (payload, expiresIn) => {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn
    });
    return token;
}


module.exports = { createJSONWebToken };