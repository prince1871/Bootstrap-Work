const { verifyToken } = require('../helpers/jwtHelpers');

const {JWT_SECRET} = require("../config/index");

// require SignIn middleware function

const requireSignIn = async (req, res, next) => {
    try {
        const  {accessToken} = req.cookies;
        if (!accessToken) {
            return res.status(409).json({ error: "Access Denied" });
        }
        const payload = verifyToken(accessToken, JWT_SECRET);
 
        if (!payload) {
            return res.status(403).json({ error: "Invalid Token" });
        }
        req.user = payload;
        next();
    }
    catch (error) {
        return res.status(403).json({ error: "Invalid Token" });
    }   
};

module.exports = requireSignIn;
