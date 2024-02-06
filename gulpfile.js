const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function react() {
    return browserify({
        entries: './public/backend/react/index.js',
        debug: true,
    })
        .transform(babelify, {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // sourceMaps: false,
            // global: true,
            // compact: true,
            ignore: [/\/node_modules/]
        })
        .bundle()
        .pipe(source('dashboard.js'))
        .pipe(gulp.dest('./public/backend/js'));
};

function react_build() {
    return browserify({
        entries: './public/backend/react/index.js',
        debug: true,
    })
        .transform(babelify, { presets: ['@babel/preset-env', '@babel/preset-react', "es2015"] })
        .bundle()
        .pipe(source('dashboard.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/backend/js'));
};

exports.react = function () {
    gulp.watch(['public/backend/react/**'], gulp.series(react));
};
exports.react_build = function () {
    gulp.watch('public/backend/react/*', gulp.series(react_build));
};
exports.default = function () {
    gulp.watch('public/backend/react/*', gulp.series(bundle));
}