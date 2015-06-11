var gulp = require('gulp');

gulp.task('build', ['browserify','css','image','javascripts', 'markup', 'less']);
