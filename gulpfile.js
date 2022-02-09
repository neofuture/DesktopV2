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
const localFiles = ['./api/**/*', '!./api/vendor/**/*'];
const localTailwind = ['./src/**/*'];
const git = require('gulp-git');
const bump = require('gulp-bump');
const filter = require('gulp-filter');
const tagVersion = require('gulp-tag-version');

function inc(importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json'])
    // bump the version number in those files
    .pipe(bump({type: importance}))
    // save it back to filesystem
    .pipe(gulp.dest('./'))
    // commit the changed version number
    .pipe(git.commit('Bumps package version'))
    // read only one file to get the version number
    .pipe(filter('package.json'))
    // **tag it in the repository**
    .pipe(tagVersion({
      prefix: ''
    }));
}

function api(cb) {
  const conn = getFtpConnection();
  return gulp.src(localFiles, {base: './api', buffer: false})
    .pipe(conn.newer('api.carlfearby.co.uk'))
    .pipe(conn.dest('api.carlfearby.co.uk'))
  cb();
}

function tailwind(cb) {
  const exec = require('child_process').exec;
  inc('patch');
  exec('ng build --configuration production', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    const conn = getFtpConnection();
    return gulp.src('./dist/Tailwind/**/*', {base: './dist/Tailwind', buffer: false})
      .pipe(conn.newer('tailwind.carlfearby.co.uk'))
      .pipe(conn.dest('tailwind.carlfearby.co.uk'))
  });
  cb();
}

function getFtpConnection() {
  return ftp.create({
    host: 'api.carlfearby.co.uk',
    port: 21,
    user: 'carlfearby',
    password: 'Vertinero2835!',
    parallel: 10,
    log: gutil.log
  });
}

exports.default = function () {
  // You can use a single task
  watch(localFiles, api);
  watch(localTailwind, tailwind);
};
