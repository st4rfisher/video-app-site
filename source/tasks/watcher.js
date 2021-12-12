const {
	watch,
  series
} = require('gulp');

module.exports = function watcher() {
  watch('source/images/**/*.+(png|jpg|jpeg)', series('imagesOptimization'));
  watch('source/images/icons/*.svg', series('sprite'));
  watch('source/js/**/*.js', series('scripts'));
  watch('source/scss/**/*.scss', series('styles'));
  watch('source/pug/**/*.pug', series('pug2html'));
  watch('source/**/*.html', series('html', 'reload'));
}
