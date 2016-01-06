var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var browserify = require('browserify')
var babelify = require('babelify');
var source = require('vinyl-source-stream');


var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

//TRANSFORM
gulp.task('transform', function () {
    browserify("./src/js/App.js",{debug: true})
    .transform("babelify", {presets: ["es2015", "react"], sourceMaps: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
 
});

gulp.task('copy', function () {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', ['transform','copy'], function () {
    gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);