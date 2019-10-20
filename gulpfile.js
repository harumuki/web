var gulp = require('gulp');
var postcss = require('gulp-postcss');
var shell = require('gulp-shell');
const { series, parallel } = require('gulp');

gulp.task('css', function () {
  return gulp.src('./style/main.css')
    .pipe(postcss())
    .pipe(gulp.dest('./public_html'));
});

gulp.task('html', shell.task('eleventy --config=eleventy.js'));

exports.default = gulp.parallel(
  'css',
  'html'
)



