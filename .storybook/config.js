import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { version } from '../package.json';

import { withCode } from './code-preview';
import { withScript } from './script-loader';

import '../src/scss/mds.scss';

setOptions({
  name: `Middlebury Design System v${version}`,
  url: 'https://middlebury-design-system.netlify.com/'
});

// TODO: change this to be a tab on the bottom panel
addDecorator(withCode);

// wrap all component examples with some padding
addDecorator(story => <div className="p-4">{story()}</div>);

// TODO: change this to be production path on built storybook
addDecorator(withScript('//localhost:3000/js/demo.js'));

const req = require.context('../src/scss', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
