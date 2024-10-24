const express = require('express');
const app = express();
const transport = require('./helpers/smtpTransport');
const envVariables = require('./constants/index');


const dataValidator = require('./middlewares/dataValidator');



app.use(express.json());

const {USER_EMAIL} = envVariables;

app.get("/", (req, res) => {
    res.send("This is our email sender app"); 
});

app.post("/email/send", dataValidator, async (req, res) => {
    const {email, message} = req.body;

    const mailOptions = {
        to: email,
        from: USER_EMAIL,
        subject: "Test email",
        html: `<h1>This is a text of our email</h1>`
    };

    transport.sendMail(mailOptions, (error) => {
        if (error) {
            return console.log(error); 
        }

        res.status(200).json({message: "Email sent successfully"});
    });
});


module.exports = app;