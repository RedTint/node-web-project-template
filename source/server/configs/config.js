'use strict';

var env = process.env.NODE_ENV || 'dev';
var config = require('./config.json')[env];

module.exports = config;
