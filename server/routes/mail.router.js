var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post ('/', function(req, res, next){ //this will contact the nodemailer service through the server
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'julie.zimmer0118@gmail.com',
                pass: 'New51ark' //add my gmail password.  look up dotenv. Has to be installed via npm
        }   
    });
    var mailOptions = {
        from: 'julie.zimmer0118@gmail.com',
        to: 'julie.zimmer0118@gmail.com', /*will need to be able to get the new user's email address into this object in email format*/
        subject: 'new Account Created' ,
        text: 'Welcome to My Family Medical Tracker',
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
}); //end of post

module.exports = router;