import React, {Component} from 'react';
import Helmet from 'react-helmet';

const TableOfContents = ({toc}) => (
  <nav className="docs-toc">
    <h2 className="docs-toc__title">Table of contents</h2>
    <div
      className="docs-toc__content"
      dangerouslySetInnerHTML={{__html: toc}}
    />
  </nav>
);

class ComponentPage extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const {tableOfContents} = post;
    const {title, desc, group, responsive} = post.frontmatter;
    return (
      <article className="docs-page">
        <Helmet title={title}>
          {desc && <meta name="description" content={desc} />}
        </Helmet>
        <header className="docs-page-header">
          {group && <p className="docs-page-header__group">{group}</p>}
          <h1 className="docs-page-header__title">{title}</h1>
          {desc && <p className="docs-page-header__desc">{desc}</p>}
          {responsive && <p className="docs-page-header__badge">Responsive</p>}
        </header>
        {tableOfContents && (
          <div className="docs-page__toc">
            <TableOfContents toc={tableOfContents} />
          </div>
        )}
        <div
          className="docs-markdown"
          dangerouslySetInnerHTML={{__html: post.html}}
        />
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
      tableOfContents
      frontmatter {
        title
        desc
        responsive
        group
      }
    }
  }
`;
