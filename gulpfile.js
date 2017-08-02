var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

function bundle(b) {
    gutil.log('Retranspiling source code');
    return b.bundle()
           .pipe(source('main.js'))
           .pipe(gulp.dest('./dist'));
}

gulp.task('browserify', function() {
    var b = browserify({
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });
    
    b.transform(function(file) {
        return reactify(file, {
            harmony: true
        });
    });
    
    b.add('./main.js');
    bundle(b);
});
