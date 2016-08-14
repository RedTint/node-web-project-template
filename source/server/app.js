'use strict';

/* LOAD DEPENDENCIES
================================================*/
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');

/* CONFIG
================================================*/

var config = require('./configs/config.js');
var clientPath = config.client.path;
var clientAbsPath = __dirname + '/' + clientPath;
var ports = config.ports;

/* LOAD ROUTES
================================================*/
var clientRoute     = require('./routes/client-route');
var apiRoutes       = require('./api/routes/routes');

/* CONFIGURE EXPRESS
================================================*/
app.use(bodyParser.json());

/* REGISTER ROUTES
   - It would be great to have all routings
     called in this section
   - express instance 'app' is passed as
     parameter to all route declarations
================================================*/
console.log('# Registering routes');
clientRoute(app);
apiRoutes(app);

/* MAIN
================================================*/

console.log('# Running server in \'' + config.description + '\'');

// Add SSL Certificate Here
// Run listen to https and http here.

console.log('# Client Path: ' + clientPath);

/* LAUNCH SERVER
================================================*/
app.listen(ports.http);

process.on('uncaughtException', function(err){
    console.log('Uncaught Exception:');
    console.log(err);
});
