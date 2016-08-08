'use strict';

/* DEPENDENCIES
=====================================*/

var gulp = require('gulp');
var clean = require('gulp-clean');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyJs = require('gulp-minify');
var gulpif = require('gulp-if');

/* ENVIRONMENT VARIABLES
=====================================*/
var env = process.env.NODE_ENV || 'dev';
var doMinify = (env == 'live');

/* CLEANUP
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

/* COPY FILES
====================================================== */

gulp.task('copy-files', ['clean'], function() { 

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

/* COMPILE SASS
====================================================== */

gulp.task('compile-sass', function() { 

    var files = [
        'dev/sass/**/*.scss'
    ];

    var destination = 'dev/css/';

    return gulp.src(files)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destination));

});

/* CONCATENATION TASKS
====================================================== */

gulp.task('concat-css', ['compile-sass'], function() {

    var files = [
        'dev/css/**/*.css'
    ];

    var destination = 'build/css/'

    return gulp.src(files)
        .pipe(concat('all.css'))
        .pipe(gulp.dest(destination));

});

gulp.task('concat-js', function() { 

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

gulp.task('concat', ['concat-js', 'concat-css'], function() {

});

/* MINIFICATION TASKS
====================================================== */

gulp.task('minify', ['concat'], function() {
    
    var pipeline = [];

    var files = [
        'build/js/all.js'
    ];

    var jsDest = 'build/js';
    var cssDest = 'build/css';

    // Minify JS
    var jsOptions = {
        ext: {
            src: '-debug.js',
            min: '.js'
        },
        noSource: true,
        mangle: true,
        compress: true
    }

    pipeline.push(
        gulp.src(files)
        .pipe(gulpif(doMinify, minifyJs(jsOptions)))
        .pipe(gulp.dest(jsDest))
    );

    return pipeline;

});


/* MAIN TASKS
====================================================== */

gulp.task('build', ['copy-files', 'minify'], function() {
});



gulp.task('default', function() {

});
