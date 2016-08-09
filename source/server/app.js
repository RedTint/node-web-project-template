'use strict';

/* LOAD DEPENDENCIES
================================================*/
var express         = require('express');
var app             = express();

/* CONFIG
================================================*/

var config = require('./configs/config.js');
var clientPath = __dirname + '/' + config.client.path;

/* MAIN
================================================*/

console.log('# Running server in \'' + config.description + '\'');

// Add SSL Certificate Here
// Run listen to https and http here.

console.log('Client Path: ' + clientPath);
app.use(express.static(clientPath));
