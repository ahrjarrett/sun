// TODO: import gulp.config.js file

// 'use strict';

var gulp       = require('gulp'),
		autoprefix = require('gulp-autoprefixer'),
		browserify = require('browserify'),
		// config     = require('./gulp.config'),
		del        = require('del'),
		concat     = require('gulp-concat'),
		gutil      = require('gulp-util'),
		jshint     = require('gulp-jshint'),
		livereload = require('gulp-livereload'),
		nodemon    = require('gulp-nodemon'),
		plumber    = require('gulp-plumber'),
		sass       = require('gulp-ruby-sass'),
		source     = require('vinyl-source-stream');

var config = {
	allJs: [
		'./public/js/src/**/*.js',
		'./*.js',
		'./app/**/*.js'
	],
	css: './public/css/',
	js: './public/js/',
	lib: './public/lib/',
	sass: './public/css/**/*.scss'
};

gulp.task('default', [
	'styles',
	'scripts',
	'develop',
	'watch'
]);

gulp.task('clean-styles', function(){
	var files = config.css + '*.css';
	clean(files);
});

gulp.task('develop', function () {
	livereload.listen();
	nodemon({
		script: 'app.js',
		ext: 'js jade',
		stdout: false
	}).on('readable', function () {
		this.stdout.on('data', function (chunk) {
			if(/^Express server listening on port/.test(chunk)){
				livereload.changed(__dirname);
			}
		});
		this.stdout.pipe(process.stdout);
		this.stderr.pipe(process.stderr);
	});
});

// gulp.task('bundle', function(){
//   return browserify('./public/js/main.js')
//     .bundle()
//     .on('error', function(e) {
//       gutil.log(e);
//     })
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest(config.js));
// });

gulp.task('scripts', ['vet'], function(){

	return gulp.src(config.js + 'main.js')
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest(config.js));
});

gulp.task('styles', ['clean-styles'], function () {
	return sass(config.css + '**/*.scss')
		.pipe(autoprefix({browsers: ['last 2 version', '> 5%']}))
		.pipe(gulp.dest(config.css))
		.pipe(livereload());
});

gulp.task('vet', function(){
	return gulp.src(config.allJs)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			verbose: true
		}));
});

gulp.task('watch', function() {
	gulp.watch(config.css + '**/*.scss', ['styles']);
	gulp.watch(config.js + '**/*.js', ['scripts']);
});


////

function clean(path) {
	del(path);
}



