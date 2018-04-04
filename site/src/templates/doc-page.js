import React, {Component} from 'react';
import Helmet from 'react-helmet';

import ColorPalette from '../components/ColorPalette';
import IconLibrary from '../components/IconLibrary';

const TableOfContents = ({toc}) => (
  <nav className="docs-toc">
    <h2 className="docs-toc__title">Table of contents</h2>
    <div
      className="docs-toc__content"
      dangerouslySetInnerHTML={{__html: toc}}
    />
  </nav>
);

const SassDoc = ({doc}) => {
  const {description, name, type} = doc;
  return (
    <div>
      <p>{type}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

class DocPageTemplate extends Component {
  render() {
    const {site, doc, icons, colors, sassdoc} = this.props.data;

    const {html, tableOfContents} = doc;
    const {
      title,
      desc,
      group,
      responsive,
      showIcons,
      showColors
    } = doc.frontmatter;

    const repoUrl = site.siteMetadata.repoUrl.replace('.git', '');
    const editLink = `${repoUrl}/edit/master/src/scss/${doc.fields.path}`;

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
        <section className="docs-page__main">
          {tableOfContents && (
            <div className="docs-page__toc">
              <TableOfContents toc={tableOfContents} />
            </div>
          )}

          <div className="docs-page__content">
            {showIcons && <IconLibrary icons={icons} />}
            {showColors && <ColorPalette colors={colors} />}

            <div
              className="docs-markdown"
              dangerouslySetInnerHTML={{__html: html}}
            />

            <div>
              <a href={editLink}>Edit on GitHub</a>
            </div>

            {/* <SassDoc doc={sassdoc} /> */}
          </div>
        </section>
      </article>
    );
  }
}

export default DocPageTemplate;

export const pageQuery = graphql`
  query docPage($slug: String!) {
    site {
      siteMetadata {
        repoUrl
      }
    }
    doc: markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      tableOfContents
      fields {
        path
      }
      frontmatter {
        title
        desc
        responsive
        group
        showIcons # defines whether or not to show icons on page
        showColors # defines whether or not to show colors on page
      }
    }
    icons: allSvg(filter: {id: {regex: "/icons/"}}) {
      edges {
        node {
          id
          name
          internal {
            content
          }
        }
      }
    }
    colors: allColorsYaml {
      edges {
        node {
          id
          name
          hex
        }
      }
    }
    # sassdoc: sassdoc(name: {eq: $sassdoc}) {
    #   name
    #   sassDocAst {
    #     description
    #     access
    #     context {
    #       type
    #       name
    #       code
    #       line {
    #         start
    #         end
    #       }
    #     }
    #     file {
    #       path {
    #         id
    #         name
    #       }
    #     }
    #   }
    # }
  }
`;
