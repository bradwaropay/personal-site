// Include gulp
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'gulp.*',
    'postcss-*',
    'autoprefixer',
    'lost',
    'main-bower-files',
    'precss'
  ],
  replaceString: /\b(gulp|postcss)[\-.]/
});

// CSS and JS paths
var paths = {
  cssSource: './src/styles/',
  cssDestination: './out/styles/',
  jsSource: './src/scripts/',
  jsDestination: './out/scripts/'
}

// Get Bower dependencies
// Bower compile lib CSS
gulp.task('bower-css', function() {
   gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('*.css'))
    .pipe(plugins.order([
      '*'
    ]))
    .pipe(plugins.concat('lib.css'))
    .pipe(plugins.minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest(paths.cssDestination));
});

// Bower compile lib JS
gulp.task('bower-js', function() {
   gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('*.js'))
    .pipe(plugins.order([
      'jquery.js',
      '*'
    ]))
    .pipe(plugins.concat('lib.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.jsDestination));
});

// Include PostCSS processors
var processors = [
  plugins.precss(),
  plugins.lost(),
  plugins.autoprefixer()
];

// Compile CSS
gulp.task('compile-css', function() {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.filter('style.css'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination));
});

// Clean CSS
gulp.task('clean-css', ['compile-css'], function () {
  return gulp.src('./out/**/_*.css')
    .pipe(plugins.clean());
});

gulp.task('default', ['bower-css', 'bower-js', 'clean-css']);
