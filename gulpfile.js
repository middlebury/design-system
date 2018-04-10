const fs = require('fs');
const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const wrap = require('gulp-wrap');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');

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

gulp.task('clean', () =>
  // prettier-ignore
  del([
    './umd',
    './es',
    './scss',
    './dist/css',
    './dist/js',
    './dist/icons'
  ])
);

/**
 * dev server
 */

gulp.task('serve', () =>
  browserSync.init({
    server: {
      baseDir: './demo',
      directory: true
    },
    open: false
  })
);

/**
 * Demo
 *
 * Move html files to demo folder so they can be viewed with browser sync.
 */

gulp.task('html:dev', ['build:icons'], () => {
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
});

/**
 * Sass tasks
 */

gulp.task('styles:dev', () =>
  gulp
    .src('./src/scss/mds.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./demo/css'))
    .pipe(browserSync.stream())
);

// Moves sass files to root so npm installs can easily import
// files without downloading html/md files as well.
gulp.task('styles:source', () =>
  gulp.src('./src/scss/**/*.scss').pipe(gulp.dest('./scss'))
);

gulp.task('styles:compiled', () => {
  const buildStyles = prod =>
    gulp
      .src('./src/scss/mds.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulpIf(prod, cssnano()))
      .pipe(
        rename({
          suffix: prod ? '.min' : ''
        })
      )
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css'));

  // build unmin files
  buildStyles();
  // build minified files
  buildStyles(true);
});

/**
 * Javascript tasks
 */

gulp.task('scripts:dev', () =>
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
    })
);

gulp.task('scripts:umd', () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: ['env'],
    plugins: ['transform-es2015-modules-umd']
  };

  return gulp
    .src(srcFiles, {base: './src/js'})
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('./umd/'));
});

gulp.task('scripts:es', () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: [['env', {modules: false}]]
  };

  return gulp
    .src(srcFiles, {base: './src/js'})
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('./es'));
});

gulp.task('scripts:rollup', () =>
  rollup
    .rollup({
      input: './src/js/index.js',
      plugins: [
        rollupBabel({
          exclude: 'node_modules/**',
          presets: [['env', {modules: false}]],
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
    )
);

// creates the minified version of the rolled up umd build
gulp.task('scripts:compiled', ['scripts:rollup'], () =>
  gulp
    .src('./dist/js/mds.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix: '.min.'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
);

/**
 * svgs
 */

const buildSvgs = src =>
  gulp
    .src(src)
    .pipe(
      rsp.remove({
        properties: ['fill', rsp.PROPS_STROKE],
        log: false
      })
    )
    .pipe(
      dom(function() {
        const svg = this.querySelector('svg');
        svg.setAttribute('fill-rule', 'evenodd');
        svg.removeAttribute('xmlns');
        return this.querySelector('body').innerHTML;
      }, false)
    )
    .pipe(
      svgo({
        plugins: [{removeTitle: true}]
      })
    );

// clean up and minify svgs
gulp.task('svg:build', () =>
  buildSvgs('./src/icons/*.svg').pipe(gulp.dest('./dist/icons/svg'))
);

// create svg sprite
gulp.task('svg:sprite', () =>
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
    .pipe(gulp.dest('./dist/icons/sprites'))
);

// copy/rename final svg files and sprite
gulp.task('svg:dist', ['svg:sprite'], () =>
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
    .pipe(gulp.dest('./dist/icons'))
);

/**
 * TODO: a11y markup test
 */

/**
 * Watch
 */

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['styles:dev']);
  gulp.watch('./src/**/*.html', ['html:dev']);
  gulp.watch('./src/**/*.js', ['scripts:dev']);
});

/**
 * Build tasks
 */

/**
 * 1. build UMD files and put in umd/
 * 2. build ES module files and put in es/
 * 3. build IIFE rollup bundle, create minified version, and add sourcemaps and place in dist/
 */
gulp.task('build:scripts', ['scripts:umd', 'scripts:es', 'scripts:compiled']);

// compile all sass and move source files
gulp.task('build:styles', ['styles:compiled', 'styles:source']);

// minify svgs, create svg sprite, and move to dist
gulp.task('build:icons', ['svg:build', 'svg:dist']);

// Mapped to npm run build
gulp.task('build', ['build:scripts', 'build:styles', 'build:icons']);

// For demo environment
gulp.task('dev', ['scripts:dev', 'html:dev', 'styles:dev', 'serve', 'watch']);

gulp.task('default', () => {
  console.log(
    '\n\nPlease use `npm run dev` to start local browser-sync server for framework development\n\n'
  );
});
