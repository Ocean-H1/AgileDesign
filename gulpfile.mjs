import gulp from 'gulp';
import babel from 'gulp-babel';
import less from "gulp-less";
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'components/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: ['components/**/*.{ts,tsx}', '!components/**/demo/*.{ts,tsx}', '!components/**/__tests__/**'], // 有效脚本文件路径
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

function less2css() {
  return gulp
    .src(paths.styles)
    .pipe(less())
    .pipe(autoPrefixer())
    .pipe(cleanCss({
      level: {
        1: {
          specialComments: 0,
          removeEmpty: true,
          removeWhitespace: true,
        }
      }
    }))
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

// 串行编译脚本，避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行任务
export const build = gulp.parallel(buildScripts, copyLess, less2css);

export default build;