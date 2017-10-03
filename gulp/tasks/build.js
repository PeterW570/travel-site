var gulp = require('gulp'),
	imageMin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin');

gulp.task('beginClean', function() {
	return del('./dist');
});

gulp.task('optimiseImages', ['beginClean'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imageMin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['beginClean'], function() {
	return gulp.src('./app/index.html')
		.pipe(usemin())
		.pipe(gulp.dest('./dist'));
});

gulp.task('build', ['beginClean','optimiseImages', 'usemin']);