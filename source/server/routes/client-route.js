'use strict';

/* REQUIRE DEPENDENCIES
================================================*/
var express = require('express');
var path = require('path');

/* CONFIG
================================================*/
var config = require('./configs/config.js');
var clientPath = config.client.path;
var clientAbsPath = __dirname + '/' + clientPath;

/* 
    app - express instance
        - should be passed to make sure we are using only a single instance of 'express'
*/
module.exports = function(app) {
    
    app.use(express.static(clientPath));

    app.get('/', function(req, res) {
        res.sendFile(path.join(clientAbsPath, 'index.html'));
        console.log(path.join(clientAbsPath, 'index.html'));
    });

};
