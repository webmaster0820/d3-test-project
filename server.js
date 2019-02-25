var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '4bab554a9f2c4866a902e3c495f1f12e'; // Your client id
var client_secret = 'b19720bec5c147fcb64d185d3486d153'; // Your client secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var app = express();

app.use(express.static(__dirname))
    .use(cookieParser());


console.log('Listening on 8889');
app.listen(8889);