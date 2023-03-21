const gulp = require('gulp')
// const less = require('gulp-less') // less 编译成 css
// const sass = require('gulp-sass')(require('sass')) //  sass 编译成 css 高版本sass使用方法
const sass = require('gulp-sass') //  sass 编译成 css
const cleancss = require('gulp-clean-css') //文件压缩
const rename = require('gulp-rename') //文件更名

//sass编译任务
gulp.task('type-a', () => {
  return gulp
    .src('./public/sass/themes/type-a/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-a'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-a'))
})

gulp.task('type-b', () => {
  return gulp
    .src('./public/sass/themes/type-b/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-b'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-b'))
})

gulp.task('type-c', () => {
  return gulp
    .src('./public/sass/themes/type-c/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-c'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-c'))
})

gulp.task('type-d', () => {
  return gulp
    .src('./public/sass/themes/type-d/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-d'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-d'))
})

gulp.task('type-e', () => {
  return gulp
    .src('./public/sass/themes/type-e/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-e'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-e'))
})

gulp.task('type-full', () => {
  return gulp
    .src('./public/sass/themes/type-full/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/themes/type-full'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss()) //压缩
    .pipe(gulp.dest('./public/css/themes/type-full'))
})

gulp.task('nifty', () => {
  return gulp
    .src('./public/sass/nifty.sass')
    .pipe(sass())
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
