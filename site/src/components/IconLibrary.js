import React from 'react';

const IconLibrary = ({icons}) => (
  <div className="docs-icons">
    {icons.edges
      .sort((a, b) => (a.node.name < b.node.name ? -1 : 1))
      .map(({node}) => (
        <div key={node.id} className="docs-icons__item">
          <div>
            <span
              key={node.id}
              dangerouslySetInnerHTML={{__html: node.internal.content}}
            />
            <p>{node.name}</p>
          </div>
        </div>
      ))}
  </div>
);

export default IconLibrary;
