'use strict';

/* DEPENDENCIES
=====================================*/

var gulp = require('gulp');
var clean = require('gulp-clean');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyJs = require('gulp-minify');
var minifyCss = require('gulp-clean-css');
var gulpif = require('gulp-if');

/* ENVIRONMENT VARIABLES
=====================================*/
var env = process.env.NODE_ENV || 'dev';
var doMinify = (env == 'live');

/* CLEANUP
=====================================*/

gulp.task('clean', function(){

    var files = [

        // Ignore
        '!build/images/*.md',

        // Asset folder
        'build/css/*.css',
        'build/js/*.js',
        'build/images/**/*',

        // Vendor folder
        'build/vendors/css/*.css',
        'build/vendors/js/*.js',
        'build/index.html'
    ];

    return gulp.src(files).pipe(clean());

});

/* COPY FILES
====================================================== */

gulp.task('copy-files', ['clean'], function() { 

    var pipeline = [];

    // SINGLE FILES
    // ====================================
    var files = [
        'dev/index.html'
    ];

    // exclude first folder
    var options = {
        prefix: 1
    };

    pipeline.push(
        gulp.src(files)
        .pipe(copy('./build', options))
    );

    // IMAGE FILES
    // ====================================

    pipeline.push(
        gulp.src('dev/images/**/*')
        .pipe(copy('./build', options))
    );

    return pipeline;

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

    var destination = 'build/css/';

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

    var destination = 'build/js/';

    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(destination));

});

gulp.task('concat-vendor-css', function() {

    // just define files and 'gulp' will handle concat for you
    var files = [];

    var destination = 'build/vendors/css/';

    return gulp.src(files)
        .pipe(concat('all.css'))
        .pipe(gulp.dest(destination));

});

gulp.task('concat-vendor-js', function() { 

    // just define files and 'gulp' will handle concat for you
    var files = [];

    var destination = 'build/vendors/js/';

    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(destination));

});


var concatDependencies = ['concat-js', 'concat-css', 'concat-vendor-js', 'concat-vendor-css'];
gulp.task('concat', concatDependencies , function() {

});

/* MINIFICATION TASKS
====================================================== */

gulp.task('minify', ['concat'], function() {
    
    var pipeline = [];

    // Minify JS
    // ================================================
    var jsFiles = [
        'build/js/all.js'
    ];
    var jsDest = 'build/js';
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
        gulp.src(jsFiles)
        .pipe(gulpif(doMinify, minifyJs(jsOptions)))
        .pipe(gulp.dest(jsDest))
    );

    // Minify CSS
    // ================================================
    var cssFiles = [
        'build/css/all.css'
    ];
    var cssDest = 'build/css';
    var cssOptions = {
        compatibility: 'ie8',
        debug: true
    };

    pipeline.push(
        gulp.src(cssFiles)
        .pipe(gulpif(doMinify, minifyCss(cssOptions, function(details) {
            console.log('original ' + details.name + ': ' + details.stats.originalSize + ' bytes');
            console.log('minified ' + details.name + ': ' + details.stats.minifiedSize + ' bytes');
        })))
        .pipe(gulp.dest(cssDest))
    );

    return pipeline;

});


/* MAIN TASKS
====================================================== */

gulp.task('build', ['copy-files', 'minify'], function() {
});



gulp.task('default', function() {

});
