const {
	src,
	dest
} = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imagesOptimization() {
  return src('source/images/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo()
  ]))
  .pipe(dest('build/images'))
}

module.exports = function copyImages() {
  return src('source/images/**/*.{png,jpg,svg}')
    .pipe(dest('build/images'))
}

