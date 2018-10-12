var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            basedir: "./"
        }
    })
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('./app/*.js', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('style.css', browserSync.reload)
})
