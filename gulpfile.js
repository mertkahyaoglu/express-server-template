var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    refresh = require('gulp-livereload');

var paths = {
  scripts: ['./public/scripts/*.js'],
  appjs: ['./public/scripts/app.js'],
  html: ['./public/index.html']
};

gulp.task('clean', function(done) {
  del(['./public/scripts/dist'], done);
});

gulp.task('build', function () {
  browserify(paths.appjs)
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/scripts/dist'))
  .pipe(refresh());
});

gulp.task('html', function(){
  return gulp.task('html', function(){
    gulp.src(paths.html)
      .pipe(refresh());
  });
});

gulp.task('serve', function () {
  nodemon({script: 'server.js'})
})

gulp.task('watch', function() {
  refresh.listen();
  gulp.watch(paths.scripts, ['build']);
  gulp.watch(paths.html, ['html']);
});


gulp.task('default', ['clean', 'build', 'serve', 'watch']);
