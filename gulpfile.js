// Include gulp
var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});

// Get Bower dependencies
gulp.task('bower-css', function() {
 	gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.filter('*.css'))
		.pipe(plugins.concat('lib.css'))
    .pipe(plugins.minifyCss({keepSpecialComments: 0}))
		.pipe(gulp.dest('./out/styles/lib'));
});

gulp.task('bower-js', function() {
 	gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('lib.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./out/scripts/lib'));
});

// Clean less files
gulp.task('clean-css', function () {
  return gulp.src('./out/styles/*.less')
    .pipe(plugins.clean());
});

// Default task
gulp.task('default', ['bower-css', 'bower-js', 'clean-css']);
