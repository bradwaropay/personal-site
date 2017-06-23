// Include gulp
var gulp = require('gulp')

// Include plugins
var plugins = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'gulp.*',
    'postcss-*',
    'autoprefixer',
    'main-bower-files',
    'precss'
  ],
  replaceString: /\b(gulp|postcss)[-.]/
})

// CSS and JS paths
var paths = {
  src: './src/',
  out: './out/',
  cssSource: './src/styles/',
  cssDestination: './out/styles/',
  jsSource: './src/scripts/',
  jsDestination: './out/scripts/'
}

// Get Bower dependencies and compile lib CSS
gulp.task('bower-css', function () {
  gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('*.css'))
    .pipe(plugins.order([
      '*'
    ]))
    .pipe(plugins.concat('lib.css'))
    .pipe(plugins.minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest(paths.cssDestination))
})

// Get Bower dependencies and compile lib JS
gulp.task('bower-js', function () {
  gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('*.js'))
    .pipe(plugins.order([
      'jquery.js',
      '*'
    ]))
    .pipe(plugins.concat('lib.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.jsDestination))
})

// Include PostCSS processors
var processors = [
  plugins.precss(),
  plugins.hexrgba(),
  plugins.autoprefixer()
]

// Compile CSS
gulp.task('compile-css', function () {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.filter('style.css'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination))
})

// Clean CSS
gulp.task('clean-css', ['compile-css'], function () {
  return gulp.src(paths.out + '*.css', {read: false})
    .pipe(plugins.clean())
})

// Compile JS
gulp.task('compile-js', function () {
  return gulp.src(paths.jsSource + '**/*.js')
    .pipe(plugins.order([
      'webfonts.js',
      'background-particles.js',
      'smoothstate.js',
      'script.js'
    ]))
    .pipe(plugins.concat('script.js'))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.jsDestination))
})

// Clean JS
gulp.task('clean-js', function () {
  return gulp.src(paths.out + '*.js', {read: false})
    .pipe(plugins.clean())
})

// Clean Data
gulp.task('clean-data', function () {
  return gulp.src(paths.out + 'data', {read: false})
    .pipe(plugins.clean())
})

// Tasks
gulp.task('default', ['bower-css', 'bower-js', 'clean-css', 'clean-js', 'clean-data'])
