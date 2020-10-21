var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

gulp.src('src/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('.'));
