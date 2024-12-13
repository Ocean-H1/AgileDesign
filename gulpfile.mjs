import gulp from 'gulp';
import babel from 'gulp-babel';
import less from "gulp-less";
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import through2 from 'through2';

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
    .pipe(
      through2.obj(function (file, encoding, next) {
        try {
          this.push(file.clone());

          if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
            const content = file.contents.toString(encoding);
            file.contents = Buffer.from(cssInjection(content));
            file.path = file.path.replace(/index\.js/, 'css.js');
            this.push(file);
          }
          next();
        } catch (error) {
          next(error);
        }
      })
    )
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

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content.replace(/import\s+(['"])([^'"]*\.less)\1/g, (match, quote, path) => {
    // 将 .less 替换为 .css
    const newPath = path.replace('.less', '.css');
    
    // 如果路径包含 /style 或 /style/index.js，则进一步替换为 /style/css.js
    if (newPath.endsWith('/style') || newPath.endsWith('/style/index.js')) {
      return `import ${quote}${newPath.replace(/(\/style)(?:\/index\.js)?$/, '$1/css.js')}${quote}`;
    }

    // 否则，直接返回替换后的 .css 路径
    return `import ${quote}${newPath}${quote}`;
  });
}

// 串行编译脚本，避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行任务
export const build = gulp.parallel(buildScripts, copyLess, less2css);

export default build;