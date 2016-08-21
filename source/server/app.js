'use strict';

/* LOAD DEPENDENCIES
================================================*/
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var spawn           = require('child_process').spawn;

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
   - simply pass an express instance 'app' inside 
     route declarations
================================================*/
console.log('# Registering routes');
clientRoute(app);
apiRoutes(app);

/* TODO: REGISTER SSL CERTIFICATE HERE
================================================*/

/* RUN CLIENT GULP
   - Runs gulp from inside the source/client
     folder.
================================================*/
console.log('# Running \'client build\'');

process.chdir('../client');
var gulpChild = spawn('gulp', ['build']);

gulpChild.stdout.on('data', function(data) {
    if (data) {
        console.log(data.toString());
    }
});

gulpChild.stdout.on('close', function(data) {
    console.log('> Client build done...')
    startServer();
});

function startServer() {

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
 
}
