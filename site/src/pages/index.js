import React, {Component} from 'react';

class Home extends Component {
  render() {
    const {title} = this.props.data.site.siteMetadata;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query homeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
