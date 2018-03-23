import React, {Component} from 'react';
import colorable from 'colorable';

import CopyButton from './CopyButton';
import HoverContent from './HoverContent';

class ColorSwatch extends Component {
  state = {
    isOpen: false
  };
  render() {
    const {name, hex, id, a11yColors} = this.props;
    const {isOpen} = this.state;

    const content = (
      <div>
        <CopyButton value={hex} label="Copy hex" />
        <button
          onClick={e => this.setState({isOpen: !isOpen})}
          className="button button--link button--sm"
        >
          {isOpen ? 'Hide' : 'See'} color contrast
        </button>
      </div>
    );

    return (
      <div
        className="docs-colors__item"
        style={{
          width: isOpen ? '100%' : undefined
        }}
      >
        <HoverContent content={content}>
          <div
            className="docs-colors__swatch"
            style={{
              backgroundColor: hex
            }}
          />
        </HoverContent>
        <p className="docs-colors__hex">{hex}</p>
        <p className="docs-colors__name mb-1">{name}</p>
        <div style={{display: isOpen ? 'block' : 'none'}}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Hex</th>
                <th>Contrast</th>
                <th>AA</th>
                <th>AAA</th>
              </tr>
            </thead>
            <tbody>
              {a11yColors.combinations.map(
                ({
                  accessibility: {aa, aaa},
                  contrast,
                  hex: compatHex,
                  name: compatName
                }) => (
                  <tr key={compatName}>
                    <td
                      style={{
                        background: hex,
                        color: compatHex
                      }}
                    >
                      {compatName}
                    </td>
                    <td>{compatHex}</td>
                    <td>{contrast.toFixed(2)}</td>
                    <td style={{color: aa ? 'green' : 'red'}}>
                      {aa ? 'Pass' : 'Fail'}
                    </td>
                    <td style={{color: aaa ? 'green' : 'red'}}>
                      {aaa ? 'Pass' : 'Fail'}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const ColorPalette = ({colors}) => {
  const _colors = colors.edges.map(({node}) => ({...node}));
  const colorsObj = _colors.reduce(
    (obj, color) => ({...obj, [color.name]: color.hex}),
    {}
  );
  const a11yColors = colorable(colorsObj, {compact: true});
  return (
    <div className="docs-colors">
      {_colors.map(({name, hex, id}) => (
        <ColorSwatch
          key={id}
          hex={hex}
          name={name}
          a11yColors={a11yColors.find(c => c.name === name)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
