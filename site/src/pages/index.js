import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

class Home extends Component {
  render() {
    const { title, description, version } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <div>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <small>Currently v{version}</small>

          <div className="row">
            <div className="col-6">
              <h2>
                <Link to="/getting-started">Getting Started</Link>
              </h2>
              <p>How to install, use the framework, code style, and more.</p>
            </div>
            <div className="col-6">
              <h2>
                <Link to="/components">Components</Link>
              </h2>
              <p>
                Browse components with code examples, guidelines, and live
                previews.
              </p>
            </div>
            <div className="col-6">
              <h2>
                <Link to="/components">Style</Link>
              </h2>
              <p>
                Foundational elements like color, grid, icons, and typography.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query homeQuery {
    site {
      siteMetadata {
        title
        description
        version
      }
    }
  }
`;
