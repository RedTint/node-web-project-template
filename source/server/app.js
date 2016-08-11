'use strict';

/* LOAD DEPENDENCIES
================================================*/
var express         = require('express');
var app             = express();

/* LOAD ROUTES
================================================*/
var clientRoute     = require('./routes/client-route');
var apiRoutes       = require('./api/routes/routes');

/* CONFIG
================================================*/

var config = require('./configs/config.js');
var clientPath = config.client.path;
var clientAbsPath = __dirname + '/' + clientPath;
var ports = config.ports;

/* REGISTER ROUTES
================================================*/
clientRoute(app);
apiRoutes(app);

/* MAIN
================================================*/

console.log('# Running server in \'' + config.description + '\'');

// Add SSL Certificate Here
// Run listen to https and http here.

console.log('Client Path: ' + clientPath);

/* LAUNCH SERVER
================================================*/
app.listen(ports.http);
