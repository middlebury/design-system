---
title: Developers
desc: lorem ipsum dolor set
path: getting-started/developers
group: getting started
---


## Install

Install via NPM

```bash
npm install --save middlebury-design-system
```

or Yarn

```bash
yarn add middlebury-design-system
```

## CDN

If you're inclided to import static assets from a CDN, we recommend using [unpkg.com](https://unpkg.com)

||URL|
---|---
CSS|https://unpkg.com/middlebury/dist/css/middlebury.min.css
ES5|https://unpkg.com/middlebury/dist/js/middlebury.es.min.js
UMD|https://unpkg.com/middlebury/dist/js/umd/middlebury.umd.min.js

See all files from Middlebury Design System available on [unpkg CDN](httsp://unpkg.com/middlebury). 


## SCSS

Using the Sass files infers usage of the SCSS pre-processor. All Sass files use the *.scss file extension.

### Importing a component

```scss
@import 'path/to/node_modules/middlebury/src/scss/components/button/button';
```

### Global variables

Most components and all global settings are stored in a single variables file so your project can reconfigure bits and pieces as you prefer.

```scss
@import 'path/to/node_modules/middlebury/src/scss/variables';
```


## Javascript

### ES modules (recommended)

Importing specific functionality

```js
// es modules
import { Toggler } from 'middlebury'

// commonjs
const Toggler = require('middlebury').Toggler
```

### Using the built js files

```html
<html>
  <body>
    <!-- Put HTML snippets of components here... -->
    <script src="node_modules/middlebury/dist/js/middlebury.min.js"></script>
  </body>
</html>
```
