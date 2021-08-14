const config = require('config');
const jwt = require('jsonwebtoken');

// Get the token 
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for the token
    if(!token) res.status(401).json({ msg: 'Token does not exist, authorization denied'});

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // Add user from the payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token not valid' });
    }
}

module.exports = auth;