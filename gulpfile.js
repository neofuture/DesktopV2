const {watch, series} = require('gulp');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');
const gulp = require("gulp");
const {exec} = require("child_process");
const localFiles = ['./api/**/*', '!./api/vendor/**/*'];
const localTailwind = ['./src/**/*', '!./src/assets/js/version.js'];

function inc() {
  const docString = require('fs').readFileSync('version.js', 'utf8');
  const versionParts = docString.split('.');
  const vArray = {
    win: versionParts[0],
    vMajor: versionParts[1],
    vMinor: versionParts[2],
    vPatch: versionParts[3]
  };
  vArray.vPatch = parseFloat(vArray.vPatch) + 1;
  const periodString = ".";
  const newVersionNumber = vArray.win + '.' + vArray.vMajor + periodString + vArray.vMinor + periodString + vArray.vPatch;
  require('fs').writeFileSync('version.js', newVersionNumber + "';");
  return gulp.src(['version.js'])
    .pipe(gulp.dest('src/assets/js'));
}

function api() {
  // const conn = getFtpConnection();
  // return gulp.src(localFiles, {base: './api', buffer: false})
  //   .pipe(conn.newer('api.carlfearby.co.uk'))
  //   .pipe(conn.dest('api.carlfearby.co.uk'))
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
  watch(localFiles, api);
};

gulp.task('deploy', async function() {
  const exec = require('child_process').exec;
  inc();
  exec('ng build --configuration production', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    // const conn = getFtpConnection();
    // gulp.src('./dist/Tailwind/**/*', {base: './dist/Tailwind', buffer: false})
    //   .pipe(conn.newer('tailwind.carlfearby.co.uk'))
    //   .pipe(conn.dest('tailwind.carlfearby.co.uk'))
  });
});
