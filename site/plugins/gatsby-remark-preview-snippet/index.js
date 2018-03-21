const fs = require('fs');
const path = require('path');
const normalizePath = require('normalize-path');
const visit = require('unist-util-visit');

// Language defaults to extension.toLowerCase();
// This map tracks languages that don't match their extension.
const FILE_EXTENSION_TO_LANGUAGE_MAP = {
  js: 'jsx',
  md: 'markup',
  sh: 'bash'
};

const getExtension = file => {
  if (!file.includes('.')) {
    return 'none';
  }

  return file.split('.').pop();
};

const getLanguage = file => {
  const extension = getExtension(file);

  return FILE_EXTENSION_TO_LANGUAGE_MAP.hasOwnProperty(extension)
    ? FILE_EXTENSION_TO_LANGUAGE_MAP[extension]
    : extension.toLowerCase();
};

module.exports = (
  {markdownAST, markdownNode, getNode, files, pathPrefix, reporter},
  {classPrefix = 'language-', directory} = {}
) => {
  if (!directory) {
    throw Error('Required option "directory" not specified');
  } else if (!fs.existsSync(directory)) {
    throw Error(`Invalid directory specified "${directory}"`);
  } else if (!directory.endsWith('/')) {
    directory += '/';
  }

  visit(markdownAST, 'inlineCode', node => {
    const {value} = node;

    if (value.startsWith('preview:')) {
      const file = value.substr(8);

      const normalizedPath = normalizePath(`${directory}${file}`);

      if (!fs.existsSync(normalizedPath)) {
        throw Error(
          `Invalid snippet specified; no such file "${normalizedPath}"`
        );
      }

      const extension = getExtension(file);
      const language = getLanguage(file);

      const filename = path.basename(normalizedPath, `.${extension}`);

      const previewCode = fs.readFileSync(normalizedPath, 'utf8');

      const previewClass = `gatsby-code-preview--${filename}`;

      // Replace the node with the markup we need to make 100% width highlighted code lines work
      node.type = 'html';

      let preview;
      if (language === 'html') {
        preview = `<div class="gatsby-code-preview gatsby-code-preview--${filename}">${previewCode}</div>`;
        node.value = preview;
      }
    }
  });

  return markdownAST;
};
