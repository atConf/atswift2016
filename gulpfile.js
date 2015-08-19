var gulp = require('gulp');
var stylus = require('gulp-stylus');  
var jade = require('gulp-jade');
var jeet = require('jeet');
var rupture = require('rupture');

var paths = {
  stylus: ['./stylus/**/*.styl'],
  jade: ['./jade/**/*.jade'],
};

gulp.task('stylus', function (done) {
  gulp.src(paths.stylus)
    .pipe(stylus({use: [jeet(), rupture()]}))
    .pipe(gulp.dest('./dist/assets/css/'))
    .on('end', done);
});

gulp.task('jade', function (done) {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./dist/html/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['stylus', 'jade']);
