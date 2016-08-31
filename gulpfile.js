// General modules for gulp
var gulp = require('gulp');
var path = require('path');
var del = require('del');
var plumber = require('gulp-plumber');

// Local server
var connect = require('gulp-connect');
var cors = require('cors');

// Modules for js compilation
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

// Modules for less compilation
var less = require('gulp-less');
var cssimport = require("gulp-cssimport");

// Modules for image optimisation
var imageoptim = require('gulp-image-optimization');
var cache = require('gulp-cache');

var distRoot = 'public';

// Register tasks
gulp.task('connect', function() {
    connect.server({
        root: distRoot,
        fallback: 'index.html',
        port: 8000
    });
});

gulp.task('clean', function() {
    return del([distRoot]);
});

gulp.task('compile-js', function() {
    return browserify('./app/index.js')
        .bundle()
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(distRoot + '/js'));
});

gulp.task('compile-less', function() {
    return gulp.src('./assets/styles/style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less')]
        }))
        .pipe(cssimport())
        .pipe(gulp.dest(distRoot + '/css'));
});

gulp.task('copy-index', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest(distRoot));
});

gulp.task('copy-views', ['copy-index'], function() {
    return gulp.src('./app/views/**/*.html')
        .pipe(gulp.dest(distRoot + '/views'));
});

gulp.task('copy-fonts', function() {
    return gulp.src('./assets/fonts/*.*')
        .pipe(gulp.dest(distRoot + '/fonts'));
});

gulp.task('copy-data', function(){
    return gulp.src('./assets/data/*.*')
        .pipe(gulp.dest(distRoot + '/data'));
});

gulp.task('copy-images', function() {
    return gulp.src(['./assets/img/**/*.*', '!./assets/img/photoswipe/*.*'])
        .pipe(cache(imageoptim({
            optimizationLevel: 10,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(distRoot + '/img'));
});

gulp.task('copy-photoswipe-images', function() {
    return gulp.src('./assets/img/photoswipe/*.*')
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.js'], ['compile-js']);
    gulp.watch(['./app/views/**/*.html', 'index.html'], ['copy-views']);
    gulp.watch(['./assets/styles/**/*.less'], ['compile-less']);
    gulp.watch(['./assets/data/*.*'], ['copy-data']);
});

// Register build task starting with a 'clean' and continuing with a cb
gulp.task('build', ['clean'], function() {
    return gulp.start([
        'compile-js',
        'compile-less',
        'copy-views',
        'copy-fonts',
        'copy-data',
        'copy-images',
        'copy-photoswipe-images'
    ]);
});

gulp.task('default', ['build', 'connect', 'watch']);