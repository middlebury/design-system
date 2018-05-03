import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/docs.scss';

import 'prism-themes/themes/prism-ghcolors.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    const { children, data } = this.props;
    const {
      title,
      description,
      repoUrl,
      bugsUrl,
      version
    } = data.site.siteMetadata;

    return (
      <div className="docs">
        <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
          <meta name="description" content={description} />
        </Helmet>
        <Header
          title={title}
          repoUrl={repoUrl}
          version={version}
          nav={data.nav.group}
        />
        <div className="docs-container">
          <main className="docs-main">{children()}</main>
          <Footer
            bugsUrl={bugsUrl}
            version={version}
            buildTime={data.site.buildTime}
          />
        </div>
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
        bugsUrl
        description
        version
      }
      buildTime(formatString: "MMMM D, YYYY")
    }
    nav: allMarkdownRemark(
      filter: { frontmatter: { path: { ne: null }, group: { ne: null } } }
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
