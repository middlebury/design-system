---
title: Developers
desc: lorem ipsum dolor set
path: getting-started/developers
group: getting started
---


## Installation

Install via NPM

```bash
npm install --save middlebury-design-system
```

or Yarn

```bash
yarn add middlebury-design-system
```

### CDN

If you're inclided to import static assets from a CDN, we recommend using [unpkg.com](https://unpkg.com)

||URL|
---|---
CSS|https://unpkg.com/middlebury-design-system/dist/css/mds.min.css
JS|https://unpkg.com/middlebury-design-system/dist/js/mds.min.js

See all files from Middlebury Design System available on [unpkg CDN](httsp://unpkg.com/middlebury-design-system/). 


## SCSS

If you are using your own build tools to compile Sass, you can import invidiual components.

### Importing a component

```scss
@import 'path/to/node_modules/middlebury-design-system/scss/components/button/button';
```

### Global variables

Most components and all global settings are stored in a single variables file so your project can reconfigure bits and pieces as you prefer.

```scss
@import 'path/to/node_modules/middlebury-design-system/scss/variables';
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

### Using the prebuilt JS files

```html
<html>
  <body>
    <!-- Put HTML snippets of components here... -->
    <script src="node_modules/middlebury/dist/js/mds.min.js"></script>
  </body>
</html>
```
