import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class CopyButton extends Component {
  state = {
    copied: false
  };

  handleCopy = event => {
    this.setState({copied: true});

    setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 1000);
  };

  render() {
    const {label = 'Copy to clipboard', value} = this.props;
    return (
      <CopyToClipboard text={value} onCopy={this.handleCopy}>
        <button className="button button--outline button--sm">
          {this.state.copied ? 'Copied!' : label}
        </button>
      </CopyToClipboard>
    );
  }
}

export default CopyButton;
