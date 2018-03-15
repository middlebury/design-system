const path = require('path');

const pkg = require('../package.json');

module.exports = {
  siteMetadata: {
    title: pkg.name,
    description: pkg.description,
    repoUrl: pkg.repository.url,
    version: pkg.version
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../src/scss/`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-code-preview',
            options: {
              classPrefix: 'language-',

              // Example code links are relative to this dir.
              // eg examples/path/to/file.js

              // TODO: make imports relative to the markdown file
              directory: `${__dirname}/../src/scss/components`
            }
          }
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants'
        ]
      }
    }
  ]
};
