const {
	src,
	dest
} = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');

module.exports = function html() {
  return src('source/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({pretty: true}))
    .pipe(dest('source'))
    .pipe(pug({pretty: false}))
    .pipe(dest('build'))
}

