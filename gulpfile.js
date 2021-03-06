// Generated by CoffeeScript 1.12.4
(function() {
  var browserSync, coffee, css, gulp, html, js, jshint, path, reload, sass, sourcemaps, ts, tsProject;

  gulp = require('gulp');

  jshint = require('gulp-jshint');

  sass = require('gulp-sass');

  browserSync = require('browser-sync');

  reload = browserSync.reload;

  sourcemaps = require('gulp-sourcemaps');

  coffee = require('gulp-coffee');

  ts = require('gulp-typescript');

  tsProject = ts.createProject('tsconfig.json');

  path = './';

  html = path;

  css = path + 'assets/sitonchair/';

  js = path + 'assets/sitonchair/js/';

  gulp.task('jshint', function() {
    return gulp.src(js + '**/app.js').pipe(jshint()).pipe(jshint.reporter('default'));
  });

  gulp.task('browser-sync', function() {
    browserSync.init({
      server: '.',
      port: 8080,
      open: false
    });
    return gulp.watch([html + '*.html', css + 'style.css', js + 'app.js'], reload);
  });

  gulp.task('sass', function() {
    return gulp.src(path + 'sass/style.sass').pipe(sourcemaps.init()).pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    })).pipe(sourcemaps.write('./')).pipe(gulp.dest(css));
  });

  gulp.task('coffee', function() {
    return gulp.src(path + 'coffee/app.coffee').pipe(sourcemaps.init()).pipe(coffee({
      bare: true
    })).pipe(sourcemaps.write('./')).pipe(gulp.dest(js));
  });

  gulp.task('typescript', function() {
    return tsProject.src().pipe(sourcemaps.init()).pipe(tsProject()).js.pipe(sourcemaps.write('./')).pipe(gulp.dest(js));
  });

  gulp.task('watch', function() {
    gulp.watch(path + 'sass/**/*.sass', ['sass']);
    gulp.watch(js + '**/*.js', ['jshint']);
    gulp.watch(path + 'coffee/**/*.coffee', ['coffee']);
    return gulp.watch(path + 'ts/**/*.ts', ['typescript']);
  });

  gulp.task('default', ['jshint', 'watch', 'browser-sync']);

}).call(this);
