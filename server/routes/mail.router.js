var express = require('express');
var router = express.Router();
//brings in the modemailer module
var nodemailer = require('nodemailer');

router.post ('/', function(req, res, next){ //this will contact the nodemailer service through the server
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
                user: process.env.SENDER,
                pass: process.env.GMAIL //add my gmail password.  look up dotenv. Has to be installed via npm
        }   
    });
    var mailOptions = {
        from: process.env.SENDER,
        to: 'julie.berthiaume@gmail.com', /* will need to be able to get the new user's email address into this object in email format*/
        subject: 'Welcome to My Medi-Tracker' ,
        text: 'Welcome to My Medi-Tracker.  Thank you for creating an account. You can now track your medications and surgical procedures, and keep a list of health care practitioners who are vital to maintaining your health.  Thank you! The Tech Support Team at My Medi-Tracker',
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
}); //end of post route for nodemailer

module.exports = router;