var express = require('express');
var logger = require('./logger');
var app = express();
var mongoose = require('mongoose');
const url = 'mongodb://nickdanaNY:goodKarma2017@ds121225.mlab.com:21225/good-karma';
mongoose.connect(url);

var users = require('./routes/users');
var bloodDonations = require('./routes/bloodDonations')

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(logger);

app.use('/users', users);
app.use('/bloodDonations', bloodDonations);

app.listen(3700, function() {
    console.log('Listening!');
});