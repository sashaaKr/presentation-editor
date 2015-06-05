var gulp = require('gulp'),
    inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['app/**/*.js'], {read: false, 'cwd': __dirname });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('/app'));
});

gulp.task('default', function(){});