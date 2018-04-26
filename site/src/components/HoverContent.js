import React, {Component} from 'react';

class HoverContent extends Component {
  state = {
    isOpen: false
  };

  show = event => {
    this.setState({
      isOpen: true
    });
  };

  hide = event => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { className, content, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        className={className}
        style={{
          position: 'relative'
        }}
      >
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%'
            }}
          >
            {content}
          </div>
        )}
        {children}
      </div>
    );
  }
}

export default HoverContent;
