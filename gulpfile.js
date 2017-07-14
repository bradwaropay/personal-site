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

// Define Paths
var paths = {
  src: './src/',
  out: './out/',
  cssSource: './src/styles/',
  cssDestination: './out/styles/',
  jsSource: './src/scripts/',
  jsDestination: './out/scripts/'
}

// Build Lib JS
gulp.task('build:libjs', ['clean:libjs'], function () {
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


// Clean Lib JS
gulp.task('clean:libjs', function (cb) {
  return gulp.src([
    paths.jsDestination + 'lib.js'
  ], {read: false})
    .pipe(plugins.clean())
})

// Include PostCSS processors
var processors = [
  plugins.precss(),
  plugins.hexrgba(),
  plugins.autoprefixer()
]

// Build CSS
gulp.task('build:css', ['clean:css'], function () {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.filter('style.css'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination))
})

// Clean CSS
gulp.task('clean:css', function () {
  return gulp.src([
    paths.cssDestination
  ], {read: false})
    .pipe(plugins.clean())
})

// Build All
gulp.task('build', ['build:libjs', 'build:css'])

// Finalize and  Clean Tmp Files
gulp.task('finalize', ['build'], function () {
  return gulp.src([
    paths.out + 'data',
    paths.jsDestination + 'modules'
  ], {read: false})
    .pipe(plugins.clean())
})

// Tasks
gulp.task('default', ['finalize'])
