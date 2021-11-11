const {
	src,
	dest
} = require('gulp');

module.exports = function copy(done) {
  src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/images/**/*.svg',
    '!source/images/icons/*.svg',
  ], {
    base: 'source'
  })
    .pipe(dest('build'))
  done();
}
