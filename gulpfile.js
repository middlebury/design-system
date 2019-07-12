const fs = require('fs');
const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const combineMq = require('gulp-combine-mq');
const uglify = require('gulp-uglify');
const wrap = require('gulp-wrap');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const dom = require('gulp-dom');
const size = require('gulp-size');

const rollup = require('rollup');
const rollupBabel = require('rollup-plugin-babel');
const rollupResolve = require('rollup-plugin-node-resolve');

const docsBundle = {
  file: './site/static/mds.js',
  format: 'iife',
  name: 'MDS',
  sourcemap: true
};

/**
 * Clean
 *
 * This is run before build task via npm script `prebuild`.
 */

const clean = () =>
  del(['./umd', './es', './scss', './dist/css', './dist/js', './dist/icons']);

/**
 * dev server
 */

const serve = () =>
  browserSync.init({
    server: {
      baseDir: './demo',
      directory: true
    },
    open: false
  });

/**
 * Demo
 *
 * Move html files to demo folder so they can be viewed with browser sync.
 */

const htmlDev = () => {
  const icons = fs.readFileSync('./dist/icons/mds-icons.svg', 'utf-8');

  return gulp
    .src('./src/scss/**/*.html')
    .pipe(
      wrap(
        {
          src: './src/template.html'
        },
        {
          icons
        }
      )
    )
    .pipe(gulp.dest('./demo/'))
    .pipe(browserSync.stream());
};

/**
 * Sass tasks
 */

const stylesDev = () =>
  gulp
    .src('./src/scss/mds.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./demo/css'))
    .pipe(browserSync.stream());

// Moves sass files to root so npm installs can easily import
// files without downloading html/md files as well.
const stylesSource = () =>
  gulp.src('./src/scss/**/*.scss').pipe(gulp.dest('./scss'));

const makeStyles = prod => () =>
  gulp
    .src('./src/scss/mds.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpIf(prod, combineMq()))
    .pipe(gulpIf(prod, cssnano()))
    .pipe(
      rename({
        suffix: prod ? '.min' : ''
      })
    )
    .pipe(
      size({
        showFiles: true
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));

const stylesCompiled = gulp.parallel(makeStyles(true), makeStyles());

/**
 * Javascript tasks
 */

const scriptsDev = () =>
  rollup
    .rollup({
      input: './src/js/index.js',
      plugins: [
        rollupBabel({
          exclude: 'node_modules/**',
          presets: [
            [
              'env',
              {
                modules: false
              }
            ]
          ],
          plugins: ['external-helpers']
        }),
        rollupResolve()
      ]
    })
    .then(bundle =>
      // TODO: figure out how to only build one and import it into gatsby site
      Promise.all([
        bundle.write({
          file: './demo/js/demo.js',
          format: 'iife',
          name: 'MDS',
          sourcemap: true
        }),
        bundle.write(docsBundle)
      ])
    )
    .then(() => {
      browserSync.reload();
    });

const scriptsUmd = () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: ['env'],
    plugins: ['transform-es2015-modules-umd']
  };

  return gulp
    .src(srcFiles, { base: './src/js' })
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('./umd/'));
};

const scriptsEs = () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: [['env', { modules: false }]]
  };

  return gulp
    .src(srcFiles, { base: './src/js' })
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('./es'));
};

const scriptsRollup = () =>
  rollup
    .rollup({
      input: './src/js/index.js',
      plugins: [
        rollupBabel({
          exclude: 'node_modules/**',
          presets: [['env', { modules: false }]],
          plugins: ['external-helpers']
        }),
        rollupResolve()
      ]
    })
    .then(bundle =>
      Promise.all([
        bundle.write({
          file: './dist/js/mds.js',
          format: 'iife',
          name: 'MDS',
          sourcemap: true
        }),
        bundle.write(docsBundle)
      ])
    );

// creates the minified version of the rolled up umd build
const scriptsCompile = () =>
  gulp
    .src('./dist/js/mds.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ showFiles: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'));

/**
 * svgs
 */

const buildSvgs = src =>
  gulp
    .src(src)
    .pipe(
      dom(function() {
        const svg = this.querySelector('svg');
        svg.setAttribute('fill-rule', 'evenodd');
        return this.querySelector('body').innerHTML;
      }, false)
    )
    .pipe(
      svgo({
        plugins: [
          { removeTitle: true },
          { removeXMLNS: true },
          { removeAttrs: { attrs: '(fill|stroke)' } }
        ]
      })
    );

// clean up and minify svgs
const svgBuild = () =>
  buildSvgs('./src/icons/*.svg').pipe(gulp.dest('./dist/icons/svg'));

// create svg sprite
const svgBuildSprite = () =>
  buildSvgs('./src/icons/*.svg')
    .pipe(
      svgSprite({
        shape: {
          id: {
            generator: 'icon-%s'
          }
        },
        mode: {
          symbol: {
            // Activate the defs mode
            bust: false, // Cache busting
            example: true // Build a page
          }
        }
      })
    )
    .pipe(gulp.dest('./dist/icons/sprites'));

// copy/rename final svg files and sprite
const svgDist = () =>
  gulp
    .src('./dist/icons/sprites/symbol/**/*.svg')
    .pipe(
      rename(path => {
        if (path.extname === '.svg') {
          path.basename = 'mds-icons';
          path.dirname = '.';
        }
      })
    )
    .pipe(gulp.dest('./dist/icons'));

/**
 * TODO: a11y markup test
 */

/**
 * Watch
 */

const watch = () => {
  gulp.watch('./src/**/*.scss', stylesDev);
  gulp.watch('./src/**/*.html', htmlDev);
  gulp.watch('./src/**/*.js', scriptsDev);
};

/**
 * Build tasks
 */

/**
 * 1. build UMD files and put in umd/
 * 2. build ES module files and put in es/
 * 3. build IIFE rollup bundle, create minified version, and add sourcemaps and place in dist/
 */
const buildScripts = gulp.parallel(
  scriptsUmd,
  scriptsEs,
  scriptsRollup,
  scriptsCompile
);

// compile all sass and move source files
const buildStyles = gulp.parallel(stylesCompiled, stylesSource);

// minify svgs, create svg sprite, and move to dist
const buildIcons = gulp.series(svgBuild, svgBuildSprite, svgDist);

// Mapped to npm run build
const build = gulp.parallel(buildScripts, buildStyles, buildIcons);

// For demo environment
const dev = gulp.parallel(scriptsDev, htmlDev, stylesDev, serve, watch);

module.exports = {
  build,
  clean,
  buildIcons,
  dev
};
