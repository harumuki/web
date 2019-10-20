var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssimport = require('postcss-import');
var presetenv = require('postcss-preset-env');
var shell = require('gulp-shell');
var cssnano = require('cssnano');

gulp.task('css', function () {
  let plugins = [
    postcssimport,
    presetenv({ browsers: ['last 2 versions'], stage: 0, }),
    cssnano
  ];
  return gulp.src('./style/masin.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public_html'));
});

gulp.task('html', shell.task('eleventy --config=eleventy.js'));

exports.default = gulp.parallel(
  'css',
  'html'
)



