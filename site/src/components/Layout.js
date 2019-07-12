import React, { Component } from 'react';
import { Link, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

import '../styles/docs.scss';

import 'prism-themes/themes/prism-ghcolors.css';

import Header from './Header';
import Footer from './Footer';

const query = graphql`
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

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery query={query}>
        {data => {
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
                <main className="docs-main">{children}</main>
                <Footer
                  bugsUrl={bugsUrl}
                  version={version}
                  buildTime={data.site.buildTime}
                />
              </div>
            </div>
          );
        }}
      </StaticQuery>
    );
  }
}

export default Layout;
