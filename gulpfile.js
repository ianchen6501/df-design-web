//babel, cleanify, uglify, sass
const gulp = require("gulp")
const babel = require('gulp-babel')
var sass = require('gulp-sass');

gulp.task('default', (done) => {
  gulp.src('./src/app.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist'))
  return done()
})

gulp.task('sass', function () {
  return gulp.src('./src/.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});
