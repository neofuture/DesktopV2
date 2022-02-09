// var gulp = require("gulp"),
//   gutil = require('gulp-util'),
//   ftp = require('vinyl-ftp');
//
// gulp.task('upload', function () {
//
//   // var conn = ftp.create({
//   //   host: 'api.carlfearby.co.uk',
//   //   user: 'carlfearby',
//   //   password: 'Vertinero2835!',
//   //   parallel: 10,
//   //   log: gutil.log
//   // });
//   //
//   // return gulp.src(['./api/*', './api/index.php'], {base: './', buffer: false})
//   //   .pipe(conn.newer('/api.carlfearby.co.uk/'))
//   //   .pipe(conn.dest('/api.carlfearby.co.uk/'));
// });
//
// gulp.task("default", function () {
//   gulp.watch("./api/*", ['upload']);
//   gulp.watch("./api/index.php", ['upload']);
// });
const {watch, series} = require('gulp');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');
const gulp = require("gulp");
const localFiles = ['./api/**/*','!./api/vendor/**/*'];


function api(cb) {
  const conn = getFtpConnection();
  const remoteLocation = 'api.carlfearby.co.uk';

  return gulp.src(localFiles, {base: './api', buffer: false})
    .pipe(conn.newer(remoteLocation))
    .pipe(conn.dest(remoteLocation))
  cb();
}

function getFtpConnection() {
  return ftp.create({
    host: 'api.carlfearby.co.uk',
    port: 21,
    user: 'carlfearby',
    password: 'Vertinero2835!',
    log: gutil.log
  });
}

exports.default = function () {
  // You can use a single task
  watch(localFiles, api);
};
