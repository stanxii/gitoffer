var gulp = require('gulp');

gulp.task('build', ['browserify','image','css','javascripts', 'markup', 'less']);
