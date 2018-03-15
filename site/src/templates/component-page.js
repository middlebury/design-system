import React, {Component} from 'react';

class ComponentPage extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const {desc} = post.frontmatter;
    return (
      <article>
        <header className="docs-page-header">
          <h1 className="docs-page-header__title">{post.frontmatter.title}</h1>
          {desc && <p className="lead">{desc}</p>}
        </header>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </article>
    );
  }
}

export default ComponentPage;

export const pageQuery = graphql`
  query ComponentPage($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        desc
      }
    }
  }
`;
