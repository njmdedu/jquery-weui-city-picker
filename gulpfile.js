var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');

gulp.task('minifyjs', function() {
	gulp.src(['./src/city-picker.js'])
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
})
