import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import classnames from 'classnames';

import Button from './Button';

class CopyButton extends Component {
  state = {
    copied: false
  };

  handleCopy = event => {
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 1000);
  };

  render() {
    const { label = 'Copy to clipboard', value, className } = this.props;
    return (
      <CopyToClipboard text={value} onCopy={this.handleCopy}>
        <Button size="sm" outline className={className}>
          {this.state.copied ? 'Copied!' : label}
        </Button>
      </CopyToClipboard>
    );
  }
}

export default CopyButton;
