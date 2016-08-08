'use strict';

/* DEPENDENCIES
=====================================*/

var gulp = require('gulp');
var clean = require('gulp-clean');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/* TASKS
=====================================*/

gulp.task('clean', function(){

    var files = [
        // Asset folder
        'build/css/*.css',
        'build/js/*.js',
        'build/images/*.jpg',
        'build/images/*.jpeg',
        'build/images/*.png',
        'build/images/*.gif',

        // Vendor folder
        'build/vendors/css/*.css',
        'build/vendors/js/*.js',
        'build/app.js',
        'build/index.html'
    ];

    return gulp.src(files).pipe(clean());

});

gulp.task('copy-files', ['clean'], function(){ 

    var files = [
        // Dev root folder files
        'dev/app.js',
        'dev/index.html'
    ];

    // remove first folder
    var options = {
        prefix: 1
    };

    return gulp.src(files)
        .pipe(copy('./build', options));
});

gulp.task('concat-js', function(){ 

    var files = [
        'dev/js/example-script-01.js',
        'dev/js/example-script-02.js',
        'dev/js/example-script-03.js',
    ];

    var destination = 'build/js/'

    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(destination));

});

gulp.task('build', ['copy-files', 'concat-js'], function(){
});



gulp.task('default', function() {

});
