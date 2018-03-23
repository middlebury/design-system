import React, {Component} from 'react';

class HoverContent extends Component {
  state = {
    hovered: false
  };

  render() {
    return (
      <div
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        style={{
          position: 'relative'
        }}
      >
        {this.state.hovered && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {this.props.content}
          </div>
        )}
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default HoverContent;
