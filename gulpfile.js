/*
npm install --save-dev gulp gulp-concat browser-sync gulp-uglify gulp-rename gulp-clean-css gulp-eslint gulp-sass gulp-autoprefixer gulp-prettyerror
 */

var gulp = require('gulp');
(concat = require('gulp-concat')),
  (browserSync = require('browser-sync').create()),
  (uglify = require('gulp-uglify')),
  (rename = require('gulp-rename')),
  (cleanCSS = require('gulp-clean-css')),
  (eslint = require('gulp-eslint')),
  (sass = require('gulp-sass')),
  (autoprefixer = require('gulp-autoprefixer')),
  (prettyError = require('gulp-prettyerror')),
  (sourcemaps = require('gulp-sourcemaps'));

gulp.task('js', ['lint'], function() {
  return gulp
    .src('./src/js/*.js')
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dest/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scss', function() {
  gulp
    .src('./src/scss/app.scss')
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./'))
    .pipe(cleanCSS())
    .pipe(rename('build.min.css'))
    .pipe(gulp.dest('./dest/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/*.scss', ['scss']);
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./index.html', ['reload']);
});

gulp.task('reload', function() {
  browserSync.reload();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    host: '192.168.2.58',
    server: {
      baseDir: './'
    }
  });
});

gulp.task('lint', () => {
  return gulp
    .src(['./src/script/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch', 'browser-sync']);
