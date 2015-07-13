// Include gulp
var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')();

// Clean less files
gulp.task('clean-styles', function () {
  return gulp.src('out/styles/*.less')
    .pipe(plugins.clean());
});

// Default task
gulp.task('default', ['clean-styles']);
