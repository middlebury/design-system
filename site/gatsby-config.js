const path = require('path');

const pkg = require('../package.json');

module.exports = {
  siteMetadata: {
    title: 'Middlebury Design System',
    description: pkg.description,
    repoUrl: pkg.repository.url,
    version: pkg.version
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../src/scss/`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../src/icons/`,
        name: 'icons'
      }
    },
    'gatsby-transformer-svg',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-preview-snippet',
            options: {
              classPrefix: 'language-',

              // Example code links are relative to this dir.
              // eg examples/path/to/file.js

              // TODO: make imports relative to the markdown file
              directory: `${__dirname}/../src/scss`
            }
          }
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants'
        ]
      }
    }
  ]
};
