import React from 'react';
import PrismCode from 'react-prism';
import pretty from 'pretty';
import 'prismjs';
// import 'prismjs/themes/prism.css';

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

export const withCode = story => <CodePreview>{story()}</CodePreview>;

export default CodePreview;
