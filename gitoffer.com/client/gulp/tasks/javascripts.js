var gulp = require('gulp');
var config = require('../config').javascripts;

gulp.task('javascripts', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});