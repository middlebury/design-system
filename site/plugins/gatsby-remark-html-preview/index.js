const visit = require('unist-util-visit');

// adds the live code example before html if the code lang is `html example`
module.exports = ({markdownAST}) => {
  visit(markdownAST, 'code', (node, index, parent) => {
    const {value, lang} = node;

    if (lang !== 'html example') {
      return;
    }

    const newIndex = index + 1;

    parent.children.splice(newIndex, 0, {
      ...node,
      type: 'code',
      lang: 'html'
    });

    const example = `<div class="gatsby-html-example">${node.value}</div>`;

    node.type = 'html';
    node.value = example;

    return newIndex;
  });

  return markdownAST;
};
