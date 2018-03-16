import React, {Component} from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/docs.scss';

import '../../../src/js';

import 'prism-themes/themes/prism-ghcolors.css';

import Header from '../components/Header';

class Layout extends Component {
  render() {
    const {children, data} = this.props;
    const {title, description, repoUrl, version} = data.site.siteMetadata;

    return (
      <div className="docs-container">
        <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
          <meta name="description" content={description} />
        </Helmet>
        <Header
          title={title}
          repoUrl={repoUrl}
          version={version}
          nav={data.nav.group}
        />
        <main className="docs-main">{children()}</main>
      </div>
    );
  }
}

export default Layout;

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        repoUrl
        description
        version
      }
    }
    nav: allMarkdownRemark(
      filter: {frontmatter: {path: {ne: ""}, group: {ne: ""}}}
    ) {
      group(field: frontmatter___group) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  }
`;
