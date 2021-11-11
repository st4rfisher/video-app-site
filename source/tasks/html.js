const {
	src,
	dest
} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const sync = require('browser-sync');

module.exports = function html() {
  return src(['source/*.html', '!source/_htmls/_*.html'])
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'))
    .pipe(sync.stream())
}

