const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./styles/scss/style.scss")
    .pipe(sass())
    .pipe(dest("./styles/css"));
}

function watchTask() {
  watch(["./styles/scss/style.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
