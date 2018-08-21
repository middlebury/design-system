import React from 'react';

class ScriptLoader extends React.Component {
  componentDidMount() {
    const id = 'mds-bundle';
    const existingScript = document.getElementById(id);

    if (existingScript) {
      existingScript.remove();
    }

    const tag = document.createElement('script');
    tag.id = id;
    tag.async = false;
    tag.src = this.props.src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }

  render() {
    return this.props.children;
  }
}

export const withScript = src => storyFn => (
  <ScriptLoader src={src} children={storyFn()} />
);

export default ScriptLoader;
