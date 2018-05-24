var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: "http://localhost/portafolio/html/minimal/"
    });

    gulp.watch("./dev/sass/**/*.scss", ['sass']);
    gulp.watch("./dev/js/**/*.js", ['js']);
    gulp.watch("./**/*.php").on('change', browserSync.reload);
});

gulp.task('js', function () {
    gulp.src('./dev/js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('sass', function () {
    return gulp.src('./dev/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});
