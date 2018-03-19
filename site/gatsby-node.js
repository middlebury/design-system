const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  const docPage = path.resolve('./src/templates/doc-page.js');

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {title: {ne: ""}, path: {ne: ""}}}
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
    createPage({
      path: node.frontmatter.path,
      component: docPage,
      context: {
        slug: node.frontmatter.path
        // previous,
        // next,
      }
    });
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.path || value
    });
  }
};
