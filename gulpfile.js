//babel, cleanify, uglify, sass
const gulp = require("gulp")
const babel = require('gulp-babel')

gulp.task('babel', async() => {
  await gugulp.src('src/app.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
})

function defaultTask(cb) {
  
  cb();
}

exports.default = defaultTask
exports.babel = babel