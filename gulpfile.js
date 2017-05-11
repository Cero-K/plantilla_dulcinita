var gulp = require('gulp') ;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');




// minificar todos los archivos JS
gulp.task('min-js', function() {
    return gulp.src([
                      './assets/js/**/*.js',
                    ])
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
       .pipe(gulp.dest('./assets/js-min/'));
});


gulp.task('min-css', function () {
    gulp.src([
                './assets/css/**/*.css',
                '!./assets/css/imports.css',

              ])
        .pipe(concat('app.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('./assets/css-min/'));
});


gulp.task('css', function () {
    gulp.src([
                 './assets/css/**/*.css',
                  '!./assets/css/imports.css',

              ])

        .pipe(concat('app.dev.css'))
        .pipe(gulp.dest('./assets/css-min/'));
});
