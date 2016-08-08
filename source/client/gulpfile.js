'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

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

gulp.task('default', function() {

});
