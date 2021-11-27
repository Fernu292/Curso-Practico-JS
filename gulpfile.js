const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch, series} = require('gulp');

const paths = {
    scss: './SASS/**/*.scss',
    css: './'
}

const CSS = ()=>{
    return src(paths.scss)
    .pipe( sass() )
    .pipe(dest(paths.css));
}

const SeeArchive = ()=>{
    watch(paths.scss, CSS);
}

exports.CSS = CSS;
exports.SeeArchive = SeeArchive;

exports.default = series(CSS, SeeArchive);