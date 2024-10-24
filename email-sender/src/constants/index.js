require("dotenv").config();

const envVariables = {
    PORT: process.env.PORT,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    USER_EMAIL: process.env.USER_EMAIL
};

module.exports = envVariables;