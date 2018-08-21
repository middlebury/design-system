import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import PrismCode from 'react-prism';
import pretty from 'pretty';
// import { setOptions } from '@storybook/addon-options'
// import { version } from '../modules/primer/package.json'

import 'prismjs';
// import 'prismjs/themes/prism.css';

import '../src/scss/mds.scss';
import '../src/js';

// setOptions({
//   name: `Primer v${version}`,
//   // url: 'http://design.middlebury.edu/',
//   showDownPanel: false,
// })

class CodePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  componentDidMount() {
    this.setState({
      code: pretty(this._preview.innerHTML)
    });
  }

  render() {
    return (
      <div>
        <div ref={c => (this._preview = c)}>{this.props.children}</div>
        <br />
        <br />
        <PrismCode component="pre" className="language-html">
          {this.state.code}
        </PrismCode>
      </div>
    );
  }
}

const ScriptLoader = ({ children }) => (
  <div>
    {children}
    <script src="//localhost:3000/js/demo.js" />
  </div>
);

addDecorator(story => <CodePreview>{story()}</CodePreview>);
addDecorator(story => <div className="p-4">{story()}</div>);
addDecorator(story => <ScriptLoader>{story()}</ScriptLoader>);

const req = require.context('../src/scss/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
