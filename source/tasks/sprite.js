const {
	src,
	dest
} = require('gulp');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const sync = require('browser-sync');

module.exports = function sprite() {
  return src('source/images/icons/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/images/icons'))
    .pipe(sync.stream());
}
