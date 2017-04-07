var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  // Stuff here
  console.log('Hello Art');
});


gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});