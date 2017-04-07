var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  // Stuff here
  console.log('Hello Art');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})