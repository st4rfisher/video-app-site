const {
	src,
	dest
} = require('gulp');
const webp = require('gulp-webp');

module.exports = function createWebp() {
  return src('source/images/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(dest('build/images'))
}
