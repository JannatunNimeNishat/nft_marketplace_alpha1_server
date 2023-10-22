const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 *1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	message:'to many requests from this IP. Please try again later'
})


module.exports = {limiter};