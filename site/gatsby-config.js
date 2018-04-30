const path = require('path');

const pkg = require('../package.json');

module.exports = {
  siteMetadata: {
    title: 'Middlebury Design System',
    description: pkg.description,
    repoUrl: pkg.repository.url,
    bugsUrl: pkg.bugs.url,
    version: pkg.version
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/../src/scss`]
      }
    },
    'gatsby-plugin-catch-links',
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
        path: `${__dirname}/../dist/icons/svg/`,
        name: 'icons'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/`,
        name: 'data'
      }
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-svg',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-html-preview',
          {
            resolve: 'gatsby-remark-preview-snippet',
            options: {
              // TODO: make imports relative to the markdown file
              directory: `${__dirname}/../src/scss`
            }
          },
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              classPrefix: 'language-',
              directory: `${__dirname}/../src/scss`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers'
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants'
        ]
      }
    }
  ]
};
