const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const componentPage = path.resolve('./src/templates/component-page.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          // const previous = index === posts.length - 1 ? false : posts[index + 1].node;
          // const next = index === 0 ? false : posts[index - 1].node;

          createPage({
            path: post.node.frontmatter.path,
            component: componentPage,
            context: {
              slug: post.node.frontmatter.path
              // previous,
              // next,
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
