const jwt = require('jsonwebtoken');

//  generate token
const generateToken = (payload, secret, expiresIn) => {
    return jwt.sign(payload, secret, { expiresIn });
};

//  verify token
const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};


module.exports = { generateToken, verifyToken };

