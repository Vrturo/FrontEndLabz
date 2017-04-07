var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  // Stuff here
  console.log('Hello Art');
});


gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});