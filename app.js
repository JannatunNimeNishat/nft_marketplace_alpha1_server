const express = require('express');
const cors = require('cors');

require('dotenv').config();

//api security
const rateLimit = require('express-rate-limit')
// const limiter = require('./middlewares/api.security')

//jwt
const { createJSONWebToken } = require('./helper/jsonwebtoken');


//router
const artistRouter = require('./routes/artists.route');
const usersRouter = require('./routes/users.router');
const nftRouter = require('./routes/nfts.route');

// api security
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'to many requests from this IP. Please try again later'
})


const app = express();
app.use(cors());
app.use(express.json());

// api security handle to many requests
app.use(limiter)

//mongodb connection
require('./config/db')


//jwt api
app.post('/get_jwt_access_token', (req, res) => {
    const email = req.body;
    const token = createJSONWebToken(email, '1h');
    res.send({ token })
})



// routes
//artist router
app.use('/artists', artistRouter);
//users router
app.use('/users', usersRouter);

//nft routes
app.use('/nfts', nftRouter);





app.get('/', (req, res) => {
    res.status(200).send("nft market place is running")
})



// route not found
app.use((req, res, next) => {
    res.status(404).send("Route not found")
})

// server error 
app.use((error, req, res, next) => {
    res.status(500).send("server error", error)
})

module.exports = app;
