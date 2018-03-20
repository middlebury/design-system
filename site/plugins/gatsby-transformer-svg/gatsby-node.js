const crypto = require('crypto');
const path = require('path');

exports.onCreateNode = async function({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators
}) {
  const {createNode, createParentChildLink} = boundActionCreators;

  if (node.internal.mediaType !== 'image/svg+xml') {
    return;
  }

  const content = await loadNodeContent(node);

  const svgNode = {
    id: `${node.id} >>> SVG`,
    children: [],
    parent: node.id,
    name: node.name,
    internal: {
      content,
      type: 'SVG'
    }
  };

  // Add path to the markdown file path
  if (node.internal.type === 'File') {
    svgNode.fileAbsolutePath = node.absolutePath;
  }

  svgNode.internal.contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(content))
    .digest('hex');

  createNode(svgNode);
  createParentChildLink({parent: node, child: svgNode});
};
