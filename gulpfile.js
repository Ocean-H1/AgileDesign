const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'components/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: ['components/**/*.{ts,tsx}', '!components/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;

  return gulp
    .src(scripts)
    .pipe(babel())
    .pipe(gulp.dest(destDir));
}

function compileCJS() {
  const { dest } = paths;

  return compileScripts('cjs', dest.lib);
}

function compileESM() {
  const { dest } = paths;

  return compileScripts('esm', dest.esm);
}

function copyLess() {
  const { styles, dest } = paths;

  return gulp
    .src(styles)
    .pipe(gulp.dest(dest.lib))
    .pipe(gulp.dest(dest.esm));
}

// 串行编译脚本，避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行任务
const build = gulp.parallel(buildScripts, copyLess);

exports.build = build;

exports.default = build;