// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    gulpCopy = require('gulp-file-copy'),
    del = require('del'),
    browserSync = require('browser-sync').create();

//Define the app path
var path = {
    all:['./template/*.html','./assets/css/*.css','./assets/js/*.js'    ,'./assets/js/lib/*.js'],
    template:['./template/*.html'],
    css:['./assets/css/*.css'],
    js:['./assets/js/lib/zepto.min.js','./assets/js/lib/pre-loader.js','./assets/js/rem.js','./assets/js/common.js','./assets/js/wxshare.js','./assets/js/api.js','./assets/js/home.js'],
    homejs:['./assets/js/lib/zepto.min.js','./assets/js/lib/pre-loader.js','./assets/js/lib/swiper.min.js','./assets/js/lib/shake.js','./assets/js/rem.js','./assets/js/productsjson.js','./assets/js/common.js','./assets/js/wxshare.js','./assets/js/api.js','./assets/js/home.js'],
    giftjs:['./assets/js/lib/zepto.min.js','./assets/js/lib/pre-loader.js','./assets/js/lib/reqAnimate.js','./assets/js/lib/shake.js','./assets/js/rem.js','./assets/js/productsjson.js','./assets/js/common.js','./assets/js/wxshare.js','./assets/js/api.js','./assets/js/gift.js'],
    formjs:['./assets/js/lib/zepto.min.js','./assets/js/rem.js','./assets/js/common.js','./assets/js/wxshare.js','./assets/js/api.js','./assets/js/form.js'],
    images:['./assets/images/*'],
};
// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(path.all,{
        server: {
            baseDir: "./",
            startPath: ''
        }
    });
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

// Copy all static images
gulp.task('images', ['clean'], function() {
    return gulp.src(path.images)
        // Pass in options to the task
        //.pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/images'));
});

//css
gulp.task('css',['clean'],function () {
    // 1. 找到文件
    gulp.src(path.css)
        //.pipe(concat('style.css'))
        // 2. 压缩文件
        .pipe(minify())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./dist/css'));
});

// Concatenate & Minify
gulp.task('scripts_home',['clean'], function() {
    return gulp.src(path.homejs)
        .pipe(concat('home_all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('home_all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts_gift',['clean'], function() {
    return gulp.src(path.giftjs)
        .pipe(concat('gift_all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('gift_all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts_form',['clean'], function() {
    return gulp.src(path.formjs)
        .pipe(concat('form_all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('form_all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', ['clean'],function() {
    gulp.watch(path.homejs, ['scripts_home']);
    gulp.watch(path.giftjs, ['scripts_gift']);
    gulp.watch(path.formjs, ['scripts_form']);
    gulp.watch(path.css,['css']);
    gulp.watch(path.images,['images']);
    gulp.watch(path.template,['css']);
});

// Default Task
gulp.task('default', ['watch', 'scripts_home','scripts_gift','scripts_form','images','css','browser-sync']);