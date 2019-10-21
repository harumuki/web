var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssimport = require('postcss-import');
var presetenv = require('postcss-preset-env');
var shell = require('gulp-shell');
var cssnano = require('cssnano');
var resp = require('gulp-responsive');

gulp.task('html', shell.task('eleventy --config=eleventy.js'));

gulp.task('photos', function () {
  const glob = require('glob');
  return gulp.src('./photos/**/*.jpg')
    .pipe(resp({
      '**/*.jpg': [
        {
          width: 1400,
          rename: { suffix: '@1400w' }
        },
        {
          width: 818,
          rename: { suffix: '@818w' }
        },
        {
          width: 750,
          rename: { suffix: '@750w' }
        },
        {
          width: 400,
          rename: { suffix: '@400w' }
        }
      ]
    }, {
      quality: 60,
      progressive: true
    }))
    .pipe(gulp.dest('./public_html/photos'));


  // gulp.src('./photos/**/*.jpg')
  //   .pipe(
  //     responsive({
  //       '*': [
  //         {
  //           width: 200,
  //           quality: 50,
  //           rename: { suffix: '-200px' }
  //         },
  //         {
  //           width: 400,
  //           quality: 50,
  //           rename: { suffix: '-400px' }
  //         },
  //         {
  //           width: 600,
  //           quality: 50,
  //           rename: { suffix: '-600px' }
  //         }
  //       ]
  //     })
  //   )
  //   .pipe(gulp.dest('./public_html/photos'));
  //done();
});

gulp.task('css', function () {
  let plugins = [
    postcssimport,
    presetenv({ browsers: ['last 2 versions'], stage: 0, }),
    cssnano
  ];
  return gulp.src('./style/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public_html'));
});

exports.default = gulp.parallel(
  'css',
  'photos',
  'html'
)



