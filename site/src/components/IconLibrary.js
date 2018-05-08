import React from 'react';

import HoverContent from './HoverContent';
import CopyButton from './CopyButton';
import Button from './Button';

const getIconUrl = name =>
  `https://unpkg.com/middlebury-design-system/dist/icons/svg/${name}.svg`;

// TODO: serve icons from same host so download works
const IconLibrary = ({ icons }) => (
  <div className="docs-icons">
    <ul className="docs-icons__list">
      {icons.edges
        .sort((a, b) => (a.node.name < b.node.name ? -1 : 1))
        .map(({ node }) => {
          const svg = node.internal.content;

          const content = (
            <div className="docs-icons__actions">
              <CopyButton label="Copy SVG" value={svg} className="mb-1" />
              <Button
                is="a"
                href={getIconUrl(node.name)}
                download={`${node.name}.svg`}
                kind="light"
                outline
              >
                Download
              </Button>
            </div>
          );

          return (
            <li key={node.id} className="docs-icons__item">
              <HoverContent
                content={content}
                className="docs-icons__card"
                tabIndex={0}
              >
                <span key={node.id} dangerouslySetInnerHTML={{ __html: svg }} />
              </HoverContent>
              <p>{node.name}</p>
            </li>
          );
        })}
    </ul>
  </div>
);

export default IconLibrary;
