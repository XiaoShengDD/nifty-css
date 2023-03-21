const gulp = require('gulp')
// const less = require('gulp-less') // less 编译成 css
// const scss = require('gulp-sass')(require('sass')) //  scss 编译成 css 高版本scss使用方法
const scss = require('gulp-sass') //  scss 编译成 css
const cleancss = require('gulp-clean-css') //文件压缩
const rename = require('gulp-rename') //文件更名

//scss编译任务
gulp.task('type-a', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-a/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-a'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-a'))
})

gulp.task('type-b', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-b/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-b'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-b'))
})

gulp.task('type-c', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-c/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-c'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-c'))
})

gulp.task('type-d', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-d/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-d'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-d'))
})

gulp.task('type-e', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-e/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-e'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-e'))
})

gulp.task('type-full', () => {
  return gulp
    .src('./public/css-preprocessors/scss/themes/type-full/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/themes/type-full'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-full'))
})

gulp.task('nifty', () => {
  return gulp
    .src('./public/css-preprocessors/scss/nifty.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css/nifty'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/nifty'))
})

//parallel()将任务功能和/或组合操作组合成同时执行的较大操作。
gulp.task(
  'all',
  gulp.series(
    gulp.parallel(
      'type-a',
      'type-b',
      'type-c',
      'type-d',
      'type-e',
      'type-full',
      'nifty'
    )
  )
)
