var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var insert = require('gulp-insert');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var templateCache = require('gulp-angular-templatecache');
var packageJson = require('./package.json');


var disFolder = './dist/';

var src = (['ng-city-select.module', 'templates', 'ng-city-select']).map(function (val) {
    return 'src/' + val + '.js';
});

src.push('src/bottom.txt');
src.unshift('src/top.txt');

gulp.task('lint', function () {
    gulp.src(src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(disFolder + 'css'));
});

gulp.task('angular-template', function () {
    return gulp.src('./src/*.html')
        .pipe(
        templateCache({
            module: 'ng-city-select'
        })
    ).pipe(
        gulp.dest('./src')
    );
});


gulp.task('uglify', function () {
    return gulp.src(src)
      .pipe(concat('ng-city-select.min.js'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(disFolder));
});

gulp.task('concat', ['angular-template'], function () {
    return gulp.src(src, { base: '.' })
      .pipe(concat('ng-city-select.js'))
      .pipe(gulp.dest(disFolder));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['angular-template']);
    gulp.watch('./src/*.js', ['concat']);
    gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('build',[ 'angular-template', 'concat', 'sass', 'uglify', 'watch'], function () {

    var version = packageJson.version;
    var string = '/** \n* @version ' + version + '\n* @license MIT\n*/\n';

    gulp.src(disFolder + '*.js')
        .pipe(insert.prepend(string))
        .pipe(gulp.dest(disFolder));
});
