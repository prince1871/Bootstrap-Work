// user login controller function
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const {generateToken, verifyToken} = require("../helpers/jwtHelpers");
const {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, JWT_SECRET} = require("../config/index");


// login controller function 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userWithEmailExist = await User.findOne({ email });

        if (!userWithEmailExist) {
            return res.status(404).json({ error: "User with email does not exist" });
        }

        if (!userWithEmailExist.isVerified) {
            return res.status(403).json({ error: "User account is not verified" });
        }

        //  compare the password provided with the hashed password in the database
        const passwordMatch = bcrypt.compareSync(
            password, 
            userWithEmailExist?.password
        );

        if (!passwordMatch) {
            return res.status(403).json({ error: "Invalid login credentials" });
        }

        const jwtPayLoad = {
            email: userWithEmailExist.email,
            userId: userWithEmailExist._id,
            firstName: userWithEmailExist.firstName,
            lastName: userWithEmailExist.lastName,
        }

        // generate refresh token
        const refreshToken = generateToken(jwtPayLoad, JWT_SECRET, REFRESH_TOKEN_EXPIRES_IN);



        // generate access token
        const accessToken = generateToken(jwtPayLoad, JWT_SECRET, ACCESS_TOKEN_EXPIRES_IN);

        //cookie options
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 3600),
            secure: true,
            sameSite: "None",
            maxAge: 60 * 60 * 1000,
        };

        return res.status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .json({message: "User login successfully", refreshToken});
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }

};

// logout controller function 
const logoutUser = async (req, res) => {
    try {
        res.clearCookie("accessToken");
        res.status(200)
        .json({ message: "User logout successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Generate new access token controller function
const generateNewAccessToken = async (req, res) => {

    try {
        
        // get auth headers from req.headers
        const refreshToken = req.headers["authorization"];
        if (!refreshToken) {
            return res.status(403).json({ error: "Unauthorized" });
        }
        
        // check if the token is a bearer token and is valid
        if (refreshToken.split(" ")[0] !== "Bearer") {
            return res.status(403).json({ error: "Invalid token" });
        }

        // verify the refresh token
        
        const payload = verifyToken(refreshToken.split(" ")[1], JWT_SECRET);
        if (!payload) {
            return res.status(403).json({ error: "Invalid token" });
        }

        // generate a payload for the new access token
        const jwtPayLoad = {
            email: payload.email,
            userId: payload.userId,
            firstName: payload.firstName,
            lastName: payload.lastName,
        };

        const accessToken = generateToken(
            jwtPayLoad, 
            JWT_SECRET, 
            ACCESS_TOKEN_EXPIRES_IN
        );
        //send back the new access token
        //save the new access token in a cookie so that it can be sent back to the client 
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 3600),
            secure: true,
            sameSite: "None",
            maxAge: 60 * 60 * 1000,
        };

        return res.status(200).cookie("accessToken", accessToken, cookieOptions).json({ message: "New Access Token Generated Successfully" });


        

    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }

};


module.exports = { loginUser, logoutUser, generateNewAccessToken };

