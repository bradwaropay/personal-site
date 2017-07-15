// Include gulp
var gulp = require('gulp')
var exec = require('child_process').exec

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
  return gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.filter('*.js'))
    .pipe(plugins.order([
      'jquery.js',
      '*'
    ]))
    .pipe(plugins.concat('lib.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('./'))
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

// Clean Tmp Files
gulp.task('clean:tmp', ['build'], function () {
  return gulp.src([
    paths.out + 'data',
    paths.jsDestination + 'modules'
  ], {read: false})
    .pipe(plugins.clean())
})

// Deploy
gulp.task('deploy', ['clean:tmp'], function (cb) {
  exec('docpad deploy-ghpages --env static', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

// Tasks
gulp.task('default', ['build'])
gulp.task('build:prod', ['clean:tmp'])
gulp.task('build:deploy', ['deploy'])
