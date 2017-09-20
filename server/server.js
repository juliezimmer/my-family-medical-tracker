var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/mongo.localstrategy');
var sessionConfig = require('./modules/session.config');

//DB Module
var db = require('./modules/db.config.js');

// Routes includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var mailRouter = require('./routes/mail.router');
var medRouter = require('./routes/med.router');
var providerRouter = require('./routes/provider.router');
var surgeryRouter = require('./routes/surgery.router');
var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
//these functions look for the current path (the route the client wants) and then sends the user there. The params are the route we wnat and the file where it should go. registerRoute is a variable that is defined above on line 14.
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/meds', medRouter);
app.use('/provider', providerRouter);
app.use('/surgery', surgeryRouter);

//for nodemailer 
app.use('/mail', mailRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
