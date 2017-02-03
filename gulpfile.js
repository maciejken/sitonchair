var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jsdev', function(){
    return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ".", open: false
    });
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('sass/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass']); // zadanie 2
//    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['jsdev']);
});

gulp.task('default', ['jsdev', 'serve', 'sass', 'watch']);
