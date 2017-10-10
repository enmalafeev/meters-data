var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('app/sass/*.+(scss|sass)')
        .pipe(sass({ includePaths: require('node-normalize-scss').includePaths }, { outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))

});

gulp.task('scripts', function() {
    return gulp.src([
            'app/libs/jquery/dist/jquery.slim.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('clean', function() {
    return del.sync('docs');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('docs/img'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/*.+(scss|sass)', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([
            'app/css/master.css',
            'app/css/materialize.css',
        ])
        .pipe(gulp.dest('docs/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));

    var buildLibs = gulp.src('app/libs/**/*')
        .pipe(gulp.dest('docs/libs'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('docs/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('docs'));
});