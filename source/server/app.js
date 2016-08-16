'use strict';

/* LOAD DEPENDENCIES
================================================*/
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');

/* CONFIG
================================================*/
var config = require('./configs/config.js');
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

/* TODO: REGISTER SSL CERTIFICATE HERE
================================================*/

/* MAIN
================================================*/
console.log('# Running server in \'' + config.description + '\'');

/* LAUNCH SERVER
================================================*/
app.listen(ports.http);

process.on('uncaughtException', function(err){
    console.log('Uncaught Exception:');
    console.log(err);
});
