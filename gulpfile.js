/* ===================================================
    GULP TASKS FOR:
      * Webpack Streaming
      * Styles (SCSS)
      * BrowserSync
      * Dummy JSON Server
====================================================== */
var gulp = require('gulp');
var cp = require('child_process');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


browserSync.create();

var input = './stylesheets/*.scss';
var output = './public/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


// SCSS RELATED GULP TASKS
gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
});
gulp.task('watch:sass', ['sass'], browserSync.reload);
gulp.task('bs', ['sass'], function () {
  browserSync.init({
      proxy: "http://localhost:8880"
  });
    gulp.watch("./stylesheets/**/**/*.scss", ['watch:sass']);
});



// WEBPACK RELATED TASKS
gulp.task('clean:build', function() {
    del(['./public/js/*', './public/css/*'])
})
gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end');
    })
    .pipe(gulp.dest('./'));
});
gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});



// DUMMY JSON SERVER RELATED TASKS
gulp.task('restore-database', function() {
  return gulp.src('./data/restore.json')
    .pipe(rename('db.json'))
    .pipe(gulp.dest('./data'));
});
gulp.task('serve:api', ['restore-database'], function(done) {
  cp.exec('node_modules/.bin/json-server --watch ./data/db.json --port 3001', {stdio: 'inherit'})
    .on('close', done);
});
gulp.task('serve:node', function(done) {
  nodemon({
    exec: './node_modules/.bin/babel-node ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});



// MAIN TASKS
gulp.task('serve', ['serve:node', 'serve:api']);
gulp.task('watch', ['bs','build','watch:build']);
gulp.task('default', [ 'watch', 'serve' ]);
