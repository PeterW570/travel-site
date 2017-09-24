var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssVars = require('postcss-simple-vars'),
	nestedCss = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create();

gulp.task('default', function () {
	console.log("Hooray - you created a gulp task!");
});

gulp.task('html', function () {
	browserSync.reload();
});

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssVars, nestedCss, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function () {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function () {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});
