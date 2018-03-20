const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  const docPage = path.resolve('./src/templates/doc-page.js');

  // get all markdown with a frontmatter path field and title
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {title: {ne: null}, path: {ne: null}}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({node}) => {
    // use frontmatter path or slug auto created
    const {path} = node.frontmatter;

    createPage({
      path,
      component: docPage,
      // context is passed to the component ^ specified as query variables
      context: {
        slug: path
      }
    });
  });
};

// nodes are created via source filesystem plugin
exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  // adds the slug field so it can be used in createPages
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.path || value
    });
  }
};
