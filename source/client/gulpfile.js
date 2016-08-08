'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

/* TASKS
=====================================*/

gulp.task('config-clean', function(){
  gulp.src('client/build/assets/css/*.css').pipe(clean());
});

gulp.task('default', function() {

});
