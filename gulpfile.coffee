gulp = require 'gulp'
jshint = require 'gulp-jshint'
sass = require 'gulp-sass'
browserSync = require 'browser-sync'
reload = browserSync.reload
sourcemaps = require 'gulp-sourcemaps'
coffee = require 'gulp-coffee'
# php = require 'gulp-connect-php'

# TASKS -------------------------------------------------------------

path = './'

html = path
css = path + 'assets/sitonchair/'
js = path + 'assets/sitonchair/js/'

gulp.task 'jshint', ->
    gulp.src(js + '**/app.js')
    .pipe jshint()
    .pipe jshint.reporter 'default'

# przy włączonym proxy i php można dodać php jako zależność browser-sync'a
gulp.task 'browser-sync', ->
    browserSync.init
        server: '.'
        port: 8080
        open: false
    gulp.watch([
                html + '*.html',
                css + 'style.css',
                js + 'app.js'
            ], reload)

gulp.task 'sass', ->
    gulp.src(path + 'sass/style.sass')
    .pipe sourcemaps.init()
    .pipe sass
        errLogToConsole: true
        outputStyle: 'expanded'
    .pipe sourcemaps.write()
    .pipe gulp.dest css

gulp.task 'coffee', ->
    gulp.src(path + 'coffee/app.coffee')
    .pipe sourcemaps.init()
    .pipe coffee
        bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest js

# gulp.task 'php', ->
#     php.server
#         base: '.'
#         port: 8010
#         keepalive: true

gulp.task 'watch', ->
    gulp.watch(path + 'sass/**/*.sass', ['sass'])
    gulp.watch(js + '**/*.js', ['jshint'])
    gulp.watch(path + 'coffee/**/*.coffee', ['coffee'])
    # gulp.watch(path + '*.php', ['php'])

gulp.task 'default', ['jshint', 'watch', 'browser-sync']
