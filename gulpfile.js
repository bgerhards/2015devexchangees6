
var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task('default', ['scripts:src',"tests:src"], function() {});

gulp.task("scripts:src", function () {
  return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("compiled/src"));
});

gulp.task("tests:src", function () {
  return gulp.src("spec/src/*.js")
    .pipe(babel())
    .pipe(rename(function (path) {
    	path.basename += "-spec"
  	}))
    .pipe(gulp.dest("compiled/test"));
});