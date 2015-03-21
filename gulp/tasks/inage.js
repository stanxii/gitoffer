var gulp = require('gulp');
var config = require('../config').image;

gulp.task('image', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});