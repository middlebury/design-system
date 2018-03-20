import React from 'react';
import Link from 'gatsby-link';

import Nav from './Nav';

const Header = ({title = '', nav = [], repoUrl, version}) => (
  <header className="docs-header">
    <Link to="/" className="docs-site-title">
      {title}
    </Link>
    <Nav items={nav} />
    <a href={repoUrl} className="docs-github-link">
      GitHub Repo
    </a>
  </header>
);

export default Header;
