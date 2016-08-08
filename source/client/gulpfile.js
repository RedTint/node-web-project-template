'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var copy = require('gulp-copy');

/* TASKS
=====================================*/

gulp.task('clean', function(){

    var files = [
        // Asset folder
        './build/css/*.css',
        './build/js/*.js',
        './build/images/*.jpg',
        './build/images/*.jpeg',
        './build/images/*.png',
        './build/images/*.gif',

        // Vendor folder
        './build/vendors/css/*.css',
        './build/vendors/js/*.js',
        './build/app.js',
        './build/index.html'
    ];

    return gulp.src(files).pipe(clean());

});

gulp.task('copy-files', function(){ 

    var files = [

    ];
});

gulp.task('build', ['clean', 'copy-files'], function(){
});



gulp.task('default', function() {

});
