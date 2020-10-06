const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const {uuid} = require('uuidv4');

const app = express();
require('./database');
require('./config/passport');

//settings

app.set('port', process.env.PORT || 4000);



//middlewares



app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'h19',
    resave: true,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');


    next();
})

app.use(passport.initialize());
app.use(passport.session());

//global variables

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.email = req.email || null;
    


    next();
});




app.use('/api/users',require('./routes/users'));
app.use('/api/home', require('./routes/home'));
app.use('/api/users', require('./routes/home'));
app.use('/api/notes', require('./routes/notes'));




module.exports = app;